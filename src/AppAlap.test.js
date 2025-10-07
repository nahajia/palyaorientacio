import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App komponens", () => {
  test("megjeleníti a címet", () => {
    render(<App />);
    expect(
      screen.getByText(/Pályaorientációs kérdőív/i)
    ).toBeInTheDocument();
  });

  test("üres állapotban gombnyomás után hibaüzenet jelenik meg", () => {
    render(<App />);
    const button = screen.getByText(/Kiértékelés/i);
    fireEvent.click(button);
    expect(
      screen.getByText(/Minden mezőt ki kell tölteni!/i)
    ).toBeInTheDocument();
  });

  test("választás után sikeres üzenet jelenik meg", () => {
    render(<App />);

    // Keresünk egy selectet
    const selectPlaceholder = screen.getAllByText("Válassz...")[0];

    // Kinyitjuk a dropdown-t
    fireEvent.keyDown(selectPlaceholder, { key: "ArrowDown" });

    // Kiválasztjuk az első opciót (1-rosszul)
    const option = screen.getByText("1-rosszul");
    fireEvent.click(option);

    // Rányomunk a Kiértékelés gombra
    const button = screen.getByText(/Kiértékelés/i);
    fireEvent.click(button);

    expect(
      screen.getByText(/Sikeres kitöltés!/i)
    ).toBeInTheDocument();
  });
});
