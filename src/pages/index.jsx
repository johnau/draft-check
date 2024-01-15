import { Box } from "@mui/material";
import TaglineDisplayComponent from "../components/TaglineDisplay";
import AiCheckerButton from "../components/AiButton";
import InfoBanner from "../components/InfoBanner";
import Background from "../components/Background";

function IndexPage() {

  return (
    <>
      <Box sx={{ position: 'absolute', left: 0, bottom: '50px', zIndex: 999 }}>
        <Box sx={{ ml: 3 }}>
          <TaglineDisplayComponent />
          <AiCheckerButton />
        </Box>
        <Box sx={{ mt: 4 }}>
          <InfoBanner />
        </Box>
      </Box>
      <Background />
    </>
  );

}

export default IndexPage;