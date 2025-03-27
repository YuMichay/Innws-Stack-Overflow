import { Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getSnippets } from "../../shared/api/snippets";
import { ErrorTypography, GreetingTypography, Spinner } from "../../shared";
import { PostList } from "../../widgets";

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["snippets", page],
    queryFn: () => getSnippets(page),
    placeholderData: (prevData) => prevData,
  });

  const totalPages = data?.meta?.totalPages || 1;

  return(
    <div className="page__home">
      {isError ? (
        <ErrorTypography text="Can't get snippets" />
      ) : (
        <>
          <GreetingTypography text="Welcome to Codelang!" />

          <div className="page__home-snippets">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data?.data.length === 0 && (
                  <ErrorTypography text="No snippets found" />
                )}
                {data && data?.data.length > 0 && (
                  <PostList data={data.data} />
                )}
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage;