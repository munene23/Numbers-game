document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    let limit = parseInt(document.getElementById('limit').value);
    let result = generateMultiplesAndContains(number, limit);

    document.getElementById('multiples').textContent = `Multiples of ${number} up to ${limit}: ${result.multiples.join(', ')}`;
    document.getElementById('containsNumber').textContent = `Numbers up to ${limit} that contain ${number}: ${result.containsNumber.join(', ')}`;
});

function generateMultiplesAndContains(number, limit) {
    let multiples = [];
    let containsNumber = [];

    // Generate multiples of the given number up to the specified limit
    for (let i = 1; i * number <= limit; i++) {
        multiples.push(i * number);
    }

    // Check all numbers up to the specified limit to see if they contain the given number
    for (let i = 1; i <= limit; i++) {
        if (i.toString().includes(number.toString())) {
            containsNumber.push(i);
        }
    }

    return {
        multiples: multiples,
        containsNumber: containsNumber
    };
}
