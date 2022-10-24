let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let home_score = 0
let guest_score = 0

function increaseHomeScoreOne() {
    home_score += 1
    homeScore.textContent = home_score
}

function increaseHomeScoreTwo() {
    home_score += 2
    homeScore.textContent = home_score
}

function increaseHomeScoreThree() {
    home_score += 3
    homeScore.textContent = home_score
}

function increaseGuestScoreOne() {
    guest_score += 1
    guestScore.textContent = guest_score
}

function increaseGuestScoreTwo() {
    guest_score += 2
    guestScore.textContent = guest_score
}

function increaseGuestScoreThree() {
    guest_score += 3
    guestScore.textContent = guest_score
}