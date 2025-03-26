import { CircularProgress, Pagination, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { getSnippets } from "../../shared/api/snippets";
import { CustomIconButton } from "../../shared";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["snippets", page],
    queryFn: () => getSnippets(page),
    placeholderData: (prevData) => prevData,
  });

  console.log(data);

  const totalPages = data?.meta?.totalPages || 1;

  return(
    <div className="page__home">
      {isError ? (
        <Typography color="error" sx={{ textAlign: "center" }}>Can't get snippets</Typography>
      ) : (
        <>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Welcome to Codelang!
          </Typography>

          <div className="page__home-snippets">
            {isLoading ? (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "10vh",
                  width: "100%"
                }}
              >
                <CircularProgress />
              </Stack>
            ) : (
              <>
                {data?.data?.map((snippet) => (
                  <div key={snippet.id} className="page__home-snippet">
                    <div className="page__home-snippet-header">
                      <p>{snippet.user.username}</p>
                      <p>{snippet.language}</p>
                    </div>
                    <div className="page__home-snippet-code">
                      <SyntaxHighlighter
                        language={snippet.language || "javascript"}
                        style={atomOneDark}
                        showLineNumbers={true}
                        wrapLongLines={true}
                        customStyle={{
                          padding: "10px",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      >{snippet.code}</SyntaxHighlighter>
                    </div>
                    <div className="page__home-snippet-footer">
                      <div className="page__home-snippet-footer-likes">
                        <CustomIconButton count={snippet.marks?.filter((mark) => mark.type === 'like').length || 0} icon={<ThumbUpIcon />} color="#FF3D77" />
                        <CustomIconButton count={snippet.marks?.filter((mark) => mark.type === 'dislike').length || 0} icon={<ThumbDownIcon />} color="#9f264b" />
                      </div>
                        <CustomIconButton count={snippet.comments?.length || 0} icon={<CommentIcon />} color="primary" />
                      </div>
                  </div>
                ))}
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