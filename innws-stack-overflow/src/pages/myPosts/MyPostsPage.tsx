import { useState } from "react";

import { ErrorTypography, GreetingTypography, Spinner } from "../../shared";
import { useMySnippets } from "../../shared/hooks/useMySnippets";
import { MyPostsList } from "../../widgets";
import { Pagination } from "@mui/material";

const MyPostsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { mySnippets, totalPages, loading, error } = useMySnippets(page);
  
  return (
    <div className="page__my-posts">
      <GreetingTypography text="Welcome to Codelang!" />
      <div className="page__home-snippets">
        {loading ? (
          <Spinner />
        ) : error ? 
          <ErrorTypography text={error}></ErrorTypography>
        : (
          <>
            {mySnippets?.length === 0 && (
              <ErrorTypography text="No snippets found" />
            )}
            {mySnippets && mySnippets?.length > 0 && (
              <MyPostsList data={mySnippets} />
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
    </div>
  )
}

export default MyPostsPage;