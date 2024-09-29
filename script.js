const seatMap = document.getElementById('seat-map');
const selectedSeatsOutput = document.getElementById('selected-seats');
const totalCostOutput = document.getElementById('total-cost');

const seatCost = 10; // Cost per seat
const totalSeats = 20; // Total number of seats

// Generate seats
for (let i = 0; i < totalSeats; i++) {
    const seat = document.createElement('div');
    seat.className = 'seat';
    seat.dataset.seatId = i;
    seat.onclick = () => toggleSeat(seat);
    seatMap.appendChild(seat);
}

// Toggle seat selection
function toggleSeat(seat) {
    if (seat.classList.contains('booked')) return;

    seat.classList.toggle('selected');
    updateSelectedSeats();
}

// Update selected seats and total cost
function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatIds = [];
    let totalCost = 0;

    selectedSeats.forEach(seat => {
        selectedSeatIds.push(seat.dataset.seatId);
        totalCost += seatCost;
    });

    selectedSeatsOutput.textContent = selectedSeatIds.join(', ') || 'None';
    totalCostOutput.textContent = totalCost;
}

// Mock booking some seats
function bookSeats(seatIds) {
    seatIds.forEach(id => {
        const seat = document.querySelector(`.seat[data-seat-id="${id}"]`); // Corrected line
        if (seat) {
            seat.classList.add('booked');
        }
    });
}

// Example booked seats
bookSeats([0, 1, 2, 5]);
