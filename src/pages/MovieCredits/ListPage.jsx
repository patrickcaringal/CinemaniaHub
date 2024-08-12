import { Fragment, memo } from "react";
import { useParams } from "react-router-dom";

import { BreadcrumbWidget } from "../../common";
import { useMovieDetail } from "../../hooks";
import { tmdbImgPath } from "../../services";
import { useEnterExit } from "../../utilities/usePage";
import Credits from "./Credits";

const ListPage = memo(() => {
  const params = useParams();
  const { data, error, isLoading } = useMovieDetail(
    {
      id: params?.id,
      queryParams: {
        append_to_response: "credits",
      },
    },
    [params?.id]
  );

  useEnterExit();

  if (!data || error) return null;
  const { credits } = data;
  const { cast, crew } = credits;

  return (
    <Fragment>
      <BreadcrumbWidget
        isLoading={isLoading}
        title={`${data.title}`}
        subtitle="Cast & Crew"
        bannerImgUrl={tmdbImgPath("original", data.backdrop_path)}
      />
      <Credits cast={cast} crew={crew} />
    </Fragment>
  );
});

ListPage.displayName = "ListPage";
export default ListPage;
