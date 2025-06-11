 // Initialize wish count from memory or default to 3
        let wishCount = 4;

        // Function to update wish count display
        function updateWishCount() {
            document.getElementById('wishCountDisplay').textContent = `Wish count - ${wishCount}`;
            document.getElementById('wishCount').textContent = wishCount;
        }

        // Add wish button functionality
        document.getElementById('addWishBtn').addEventListener('click', function() {
            wishCount++;
            updateWishCount();
            
            // Add a little animation feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Show a brief message
            const originalText = this.textContent;
            this.textContent = 'Added! ✨';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });

        // Minus wish button functionality
        document.getElementById('minusWishBtn').addEventListener('click', function() {
            if (wishCount > 0) {
                wishCount--;
                updateWishCount();
                
                // Add a little animation feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Show a brief message
                const originalText = this.textContent;
                this.textContent = 'Removed! ➖';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1000);
            } else {
                // Shake animation when trying to go below 0
                this.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            }
        });

        // Initialize display
        updateWishCount();
