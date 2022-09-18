import Button from "@mui/material/Button";
import { DownloadSharp } from '@mui/icons-material';

function Resume() {
  return (
    <div className="w-full h-full min-h-full">
      {/* <Button className="absolute" variant="contained" endIcon={<DownloadSharp />}>Download This Document</Button> */}
      <iframe
        className="w-full h-screen"
        // src="/assets/experience/Jasdeep_Ahluwalia_Resume.pdf#toolbar=0"
        src="/assets/experience/Sellerchain_Recommendation.pdf"
      />
    </div>
  );
}

export default Resume;
