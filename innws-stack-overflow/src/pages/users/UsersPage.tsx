import { useState } from "react";
import { useUsers } from "../../entities/user/api/getUsers";
import { ErrorTypography, GreetingTypography, Spinner } from "../../shared";
import { UsersList } from "../../widgets";
import { Pagination } from "@mui/material";

const UsersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useUsers(page);
  const totalPages = data?.meta?.totalPages || 1;

  return (
    <div className="page__users">
      {isError ? (
        <ErrorTypography text="Can't get snippets" />
      ) : (
        <>
          <GreetingTypography text="Welcome to Codelang users!" />

          <div className="page__users-users">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data?.data.length === 0 && (
                  <ErrorTypography text="No snippets found" />
                )}
                {data && data?.data.length > 0 && (
                  <UsersList users={data.data} />
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

export default UsersPage;