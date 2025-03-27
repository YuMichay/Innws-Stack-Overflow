import { CircularProgress, Pagination, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useNavigate } from "react-router-dom";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';

import { getSnippets } from "../../shared/api/snippets";
import { CustomIconButton } from "../../shared";
import { MarkButton } from "../../features";
import { useAuth } from "../../shared/hooks/useAuth";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { isAuth } = useAuth();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["snippets", page],
    queryFn: () => getSnippets(page),
    placeholderData: (prevData) => prevData,
  });

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
                      <div className="page__home-snippet-header-title">
                        <PersonIcon />
                        <p>{snippet.user.username}</p>
                      </div>
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
                        <MarkButton disabled={!isAuth} snippetId={snippet.id} type="like" count={snippet.marks?.filter((mark) => mark.type === 'like').length || 0} icon={<ThumbUpIcon />} color="#FF3D77" />
                        <MarkButton disabled={!isAuth} snippetId={snippet.id} type="dislike" count={snippet.marks?.filter((mark) => mark.type === 'dislike').length || 0} icon={<ThumbDownIcon />} color="#FF3D77" />
                      </div>
                        <CustomIconButton disabled={!isAuth} count={snippet.comments?.length || 0} icon={<CommentIcon />} color="primary" onClick={() => navigate("/")} />
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