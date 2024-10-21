// Inicializar variables
let currentPrimeIndex = 0;
const primes = [2];

// Función para verificar si un número es primo
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para obtener el siguiente número primo
function getNextPrime() {
    let candidate = primes[primes.length - 1] + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    primes.push(candidate);
}

// Función para avanzar al siguiente primo
function nextPrime() {
    currentPrimeIndex++;
    if (currentPrimeIndex >= primes.length) {
        getNextPrime();  // Generar siguiente primo si no está en la lista
    }
    document.getElementById('primeDisplay').innerText = primes[currentPrimeIndex];
}

// Función para retroceder al primo anterior
function previousPrime() {
    if (currentPrimeIndex > 0) {
        currentPrimeIndex--;
        document.getElementById('primeDisplay').innerText = primes[currentPrimeIndex];
    }
}

// Manejadores de eventos de clic
document.body.addEventListener('click', (event) => {
    if (event.button === 0) {  // Click izquierdo
        nextPrime();
    }
});

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevenir el menú contextual del clic derecho
    previousPrime();
});
