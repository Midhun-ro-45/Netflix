import { useEffect, useState } from "react";

import "./carosel.css";
// import style from "./crasol.module.css";

const Crasol = ({ data, size = 5, render }) => {
    const [currentPage, setCurrentPage] = useState(1);
    let totalPages = Math.ceil(data?.length / size);
    const [{ start, end, total }, setRange] = useState({
        start: 0,
        end: size,
        total: data?.length,
    });

    useEffect(() => {
        const start = (currentPage - 1) * size;
        const end = currentPage * size;

        setRange({
            start,
            end,
            total,
        });
    }, [currentPage, size, total]);

    const handleNext = () => {
        currentPage < totalPages && setCurrentPage((pre) => pre + 1);
    };
    const handlePrevious = () => {
        currentPage > 1 && setCurrentPage((pre) => pre - 1);
    };
    return (
        <main>
            {/* <h3>
        showing {currentPage} of {totalPages}
      </h3> */}
            <section>
                {/* className={style.container} */}

                {/* className={style.actionContainer} */}
                <div className="main-rows">
                    <button
                        className="left-arrow"
                        disabled={currentPage === 1}
                        onClick={handlePrevious}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="60"
                            fill="currentColor"
                            className="bi bi-arrow-right-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2 8a.5.5 0 0 1 .5-.5h8.793l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L11.293 8.5H2.5A.5.5 0 0 1 2 8z" />
                        </svg>
                    </button>
                    <ul className="row-container">
                        {data?.slice(start, end)?.map((item) => (
                            <li key={item?.id}>{render(item)}</li>
                        ))}
                    </ul>
                    <button
                        className="right-arrow"
                        disabled={currentPage === totalPages}
                        onClick={handleNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="60"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.647-3.646a.5.5 0 0 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L13.293 9.5H1.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Crasol;