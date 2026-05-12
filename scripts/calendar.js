import flatpickr from "https://cdn.skypack.dev/flatpickr";

export function calendar() {
    flatpickr("#departureDate", {
      minDate: "today"
    });
    flatpickr("#returnDate", {
      minDate: "today",
    });
};