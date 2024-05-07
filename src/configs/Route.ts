import HomeScreen from "../views/HomeScreen";
import ContactScreen from "../views/ContactScreen";
import PlaceScreen from "../views/PlaceScreen";
import PlacesScreen from "../views/PlacesScreen";
import ReservationScreen from "../views/ReservationScreen";
import PageNotFoundScreen from "../views/PageNotFoundScreen";

export const routes = {
  "/": HomeScreen,
  "/contact": ContactScreen,
  "/lieux": PlacesScreen,
  "/reservation": ReservationScreen,
  "/details": PlaceScreen,
  "/page-not-found": PageNotFoundScreen,
};
