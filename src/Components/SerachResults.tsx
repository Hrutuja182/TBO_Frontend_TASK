import React, { useState } from "react";
import { SearchFormfunction } from "./SearchForm";

const ITEMS_PER_PAGE = 4;

export const Serachresults = () => {
  const [results, setResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const[activeArtist,setActiveArtist]= useState <string | null>(null);

  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

  const currentResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleNewResults = (data: any[], selectedArtist: string) => {
    setResults(data);
    setCurrentPage(1);
    setActiveArtist(selectedArtist);
  };
  return (
    <div className="container my-4 ">
      <h1 className="mb-4">TBO Artwork Search</h1>

      <SearchFormfunction onData={handleNewResults} />
      {activeArtist && (
        <p className="tex-muted">
          <strong>Active Filter- Artist ID:</strong>{activeArtist}
        </p>
      )}
      {results.length > 0 ? (
        <>
          <div className="row">
            {currentResults.map((item, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="row g-0 h-100">
                    <div className="col-5">
                      <img
                        src={item.mainImage}
                        alt={item.mainImageAltText }
                        className="img-fluid rounded-start h-100 object-fit-cover"
                      />
                    </div>
                    <div className="col-7">
                      <div className="card-body">
                        <p><strong>Title:</strong> {item.title.en}</p>
                        <p><strong>Number:</strong> {item.catalogNumber}</p>
                        <p><strong>Artist:</strong> {item.artist.name.en}</p>
                        <p><strong>Date of Origin:</strong> {item.createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
            <button
              className="btn btn-outline-secondary"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline-secondary"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-muted">No results yet. Click the button to search.</p>
      )}
    </div>
  );
};
