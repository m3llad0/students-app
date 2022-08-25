
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import App from "./App";

describe('App component', () =>{

    test('App rendering', () =>{
        render(<App/>)
        const table1 = screen.getByTestId("initial-table")
        const table2 = screen.getByTestId("changed-table")

        expect(table1).toBeInTheDocument();
        expect(table2).toBeInTheDocument();
    })
})