import { render, screen, fireEvent } from "@testing-library/react";
import { SearchResults } from "../SerachResults";

let isPaginationTest = false;

const defaultResults = [
  {
    catalogNumber: "JB0080",
    title: {
      en: "Cabinet for Tea Utensils, Handled"
    },
    createdAt: "17th century",
    artist: {
      name: {
        en: "Artist Unknown, China"
      }
    },
    mainImage: "storage/images/Placeholder.png",
    mainImageAltText: "Placeholder image for Cabinet for Tea Utensils, Handled"
  },
  {
    catalogNumber: "JB0101",
    title: {
      en: "Basket for Tea Utensils, Handled"
    },
    createdAt: "18th–19th century",
    artist: {
      name: {
        en: "Artist Unknown, China"
      }
    },
    mainImage: "storage/item_images/JB0101/JB0101_M1_small.jpg",
    mainImageAltText: "Main shot 1 for Basket for Tea Utensils, Handled"
  },
];

const manyResults = Array.from({ length: 6 }, (_, i) => ({
  ...defaultResults[0],
  title: { en: `Art ${i + 1}` },
  catalogNumber: `${100 + i}`,
}));

jest.mock("../SearchForm", () => ({
  SearchForm: ({ onData }: any) => (
    <button
      onClick={() =>
        onData(isPaginationTest ? manyResults : defaultResults, "01jxz1n9nqpxgf6xgnkdtt427c")
      }
    >
      {isPaginationTest ? "Mock Paginated Search" : "Mock Search"}
    </button>
  ),
}));

describe("SearchResults Component", () => {
  test("renders initial state", () => {
    isPaginationTest = false;
    render(<SearchResults />);
    expect(screen.getByText("TBO Artwork Search")).toBeInTheDocument();
    expect(
      screen.getByText("No results yet. Click the button to search.")
    ).toBeInTheDocument();
  });

  test("displays results when data is returned", async () => {
    isPaginationTest = false;
    render(<SearchResults />);
    fireEvent.click(screen.getByText("Mock Search"));

    expect(await screen.findByText("Cabinet for Tea Utensils, Handled")).toBeInTheDocument();
    expect(screen.getByText("Artist Unknown, China")).toBeInTheDocument();
    expect(screen.getByText("JB0080")).toBeInTheDocument();

    expect(screen.getByText("Basket for Tea Utensils, Handled")).toBeInTheDocument();
    expect(screen.getByText("Artist Unknown, China")).toBeInTheDocument();
    expect(screen.getByText("JB0101")).toBeInTheDocument();

    expect(screen.getByText("Active Filter - Artist ID:")).toBeInTheDocument();
  });

  test("pagination buttons update page correctly", () => {
    isPaginationTest = true;
    render(<SearchResults />);
    fireEvent.click(screen.getByText("Mock Paginated Search"));

    expect(screen.getByText("Art 1")).toBeInTheDocument();
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Page 2 of 2")).toBeInTheDocument();
    expect(screen.getByText("Art 5")).toBeInTheDocument();
  });
});
