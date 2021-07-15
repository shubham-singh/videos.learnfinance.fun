import { useLocalisation } from "../localisation/localisation.context";
import NavbarLayout from "../navigation/navbar.layout";
import { lang } from "../localisation/localisation.data";
import VideoCard from "../video/videoCard";
import { useHistory } from "./history.context";
import { clearHistory } from "../utils/server.requests";
import { useSnackbar } from "../snackbar/snackbar.context";

const History = () => {
  const { history, historyDispatch } = useHistory();
  const { snackbarDispatch } = useSnackbar();
  const { language } = useLocalisation();
  return (
    <div className="content">
      <NavbarLayout />
      <span className="top-grid x-large">{lang[language].history}</span>
      <button
        className="btn btn-classic shadow hide-d"
        onClick={() => clearHistory(historyDispatch, snackbarDispatch)}
      >
        {lang[language].clearHistory}
      </button>
      <div className="videos">
        {history.length === 0 ? <p>{lang[language].emptyHistory}</p> : null}
        {history.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
};

export default History;
