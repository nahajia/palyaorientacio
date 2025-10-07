// App.test.js
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
  test("minden selectben kiválaszt egy értéket és sikeres kitöltést jelez", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Fogjuk az összes select opciót (mock miatt mind egyből a DOM-ban van)
    const allOptions = screen.getAllByText("1-rosszul");

    // Kattintsunk mindegyikre, hogy kiválasszuk
    for (let opt of allOptions) {
      await user.click(opt);
    }

    // Kattintsunk a Kiértékelés gombra
    const button = screen.getByText("Kiértékelés");
    await user.click(button);

    // Ellenőrizzük a sikerüzenetet
    expect(screen.getByText("Sikeres kitöltés!")).toBeInTheDocument();
  });
});
