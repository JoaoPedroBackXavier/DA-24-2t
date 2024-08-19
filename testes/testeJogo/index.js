document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const clickButton = document.getElementById('clickButton');
    const autoClickerButton = document.getElementById('buyAutoClicker');
    const clickMultiplierButton = document.getElementById('buyClickMultiplier');
    const autoClickerCostElement = document.getElementById('autoClickerCost');
    const autoClickerCountElement = document.getElementById('autoClickerCount');
    const clickMultiplierCostElement = document.getElementById('clickMultiplierCost');
    const clickMultiplierCountElement = document.getElementById('clickMultiplierCount');

    let count = 0;
    let autoClickerCount = 0;
    let clickMultiplier = 1;
    let autoClickerCost = 10;
    let clickMultiplierCost = 50;
    let autoClickerInterval;
    
    function updateCounter() {
        counterElement.textContent = count;
        if (count % 10 === 0) {
            counterElement.classList.add('increase');
            setTimeout(() => counterElement.classList.remove('increase'), 100);
        }
    }

    function buyAutoClicker() {
        if (count >= autoClickerCost) {
            count -= autoClickerCost;
            autoClickerCount++;
            autoClickerCost = Math.floor(autoClickerCost * 1.5);
            autoClickerCostElement.textContent = autoClickerCost;
            autoClickerCountElement.textContent = autoClickerCount;
            updateCounter();
            if (!autoClickerInterval) {
                autoClickerInterval = setInterval(() => {
                    count += autoClickerCount;
                    updateCounter();
                }, 1000);
            }
        }
    }

    function buyClickMultiplier() {
        if (count >= clickMultiplierCost) {
            count -= clickMultiplierCost;
            clickMultiplier += 1;
            clickMultiplierCost = Math.floor(clickMultiplierCost * 1.5);
            clickMultiplierCostElement.textContent = clickMultiplierCost;
            clickMultiplierCountElement.textContent = `${clickMultiplier}x`;
            updateCounter();
        }
    }

    clickButton.addEventListener('click', () => {
        count += clickMultiplier;
        updateCounter();
    });

    autoClickerButton.addEventListener('click', buyAutoClicker);
    clickMultiplierButton.addEventListener('click', buyClickMultiplier);
});
