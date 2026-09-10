document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // 1. Botão de Cópia em Vidro (Glass Copy Button)
    // ----------------------------------------------------
    const preElements = document.querySelectorAll('pre');

    preElements.forEach((pre) => {
        const copyBtn = document.createElement('button');
        copyBtn.innerText = 'Copiar';
        copyBtn.classList.add('copy-btn');

        copyBtn.addEventListener('click', async () => {
            const codeText = pre.querySelector('code').innerText;
            
            try {
                await navigator.clipboard.writeText(codeText);
                
                // Feedback visual Liquid
                copyBtn.innerText = 'Copiado!';
                copyBtn.style.background = 'rgba(0, 242, 254, 0.3)';
                copyBtn.style.borderColor = 'rgba(0, 242, 254, 0.5)';
                copyBtn.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.4)';

                setTimeout(() => {
                    copyBtn.innerText = 'Copiar';
                    copyBtn.style.background = '';
                    copyBtn.style.borderColor = '';
                    copyBtn.style.boxShadow = '';
                }, 2000);

            } catch (err) {
                console.error('Falha ao copiar:', err);
                copyBtn.innerText = 'Erro';
            }
        });

        pre.appendChild(copyBtn);
    });

    // ----------------------------------------------------
    // 2. Animação de Entrada Fluida (Liquid Staggered Entry)
    // ----------------------------------------------------
    const cards = document.querySelectorAll('.endpoint-card');
    
    cards.forEach((card, index) => {
        // Prepara o card com estado inicial borrado e encolhido
        card.classList.add('liquid-enter');
        
        // A cascata: O card 1 entra rápido, o card 2 demora um pouco mais, parecendo uma onda
        setTimeout(() => {
            card.classList.add('visible');
        }, 150 + (index * 200)); 
    });
});