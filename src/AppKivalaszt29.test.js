import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Wrapper a teszthez
jest.mock('react-select', () => (props) => {
  const { options, onChange } = props;
  return (
    <div>
      {options.map(opt => (
        <div key={opt.value} onClick={() => onChange(opt)}>
          {opt.label}
        </div>
      ))}
    </div>
  );
});

describe("App select-ek és kitöltés teszt", () => {

  test("ha csak 29 select van kiválasztva, hibaüzenetet ad", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Fogjuk az összes select opciót
    const allOptions = screen.getAllByText("1-rosszul");

    // Csak az első 29 select-et választjuk ki
    for (let i = 0; i < 29; i++) {
      await user.click(allOptions[i]);
    }

    // Kattintsunk a Kiértékelés gombra
    const button = screen.getByText("Kiértékelés");
    await user.click(button);

    // Ellenőrizzük, hogy hibaüzenet jelenik meg
    expect(screen.getByText("Minden mezőt ki kell tölteni!")).toBeInTheDocument();
  });

});
