import { useState } from "react";
import { Pagination } from "@mui/material";

import { ErrorTypography, GreetingTypography, Spinner } from "../../shared";
import { useQuestions } from "../../entities/question/api/useQuestions";
import { QuestionsList } from "../../widgets";

const QuestionsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuestions(page);
  const totalPages = data?.meta?.totalPages || 1;

  return (
    <div className="page__questions">
      {isError ? (
        <ErrorTypography text="Can't get questions" />
      ) : (
        <>
          <GreetingTypography text="Welcome to Codelang Questions!" />

          <div className="page__users-questions">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data?.data.length === 0 && (
                  <ErrorTypography text="No questions found" />
                )}
                {data && data?.data.length > 0 && (
                  <QuestionsList questions={data.data} />
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

export default QuestionsPage;