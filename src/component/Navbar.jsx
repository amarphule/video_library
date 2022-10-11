import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        background: "#000",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
