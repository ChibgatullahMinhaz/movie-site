// hooks/useNavigateHandler.js
import { useNavigate } from "react-router";

const useNavigateHandler = () => {
  const navigate = useNavigate();

  // reusable function
  const handleNavigate = (path = "/", options = {}) => {
    navigate(path, options);
  };

  return handleNavigate;
};

export default useNavigateHandler;
