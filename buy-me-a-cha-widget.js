(function () {
         
            const currentScript = document.currentScript;
            const username = currentScript ? currentScript.getAttribute('data-username') : 'hridoy';
            const redirectUrl = `https://www.buymeacha.com/${username}`;
            const iconUrl = "https://res.cloudinary.com/dastfgrsc/image/upload/w_128,h_128,c_limit/v1768453496/cha-cup_jyj56e.png";

            
            const style = document.createElement('style');
            style.textContent = `
        #cha-widget-root { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        
      
        .cha-fab {
            position: fixed; bottom: 30px; right: 30px; width: 65px; height: 65px;
            background: #ffffff; border-radius: 20px; display: flex;
            align-items: center; justify-content: center; cursor: pointer;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15); z-index: 2147483647;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            animation: cha-float 3s ease-in-out infinite;
        }
        .cha-fab:hover { transform: scale(1.1) translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); }
        .cha-fab img { width: 35px; height: 35px; object-fit: contain; }

       
        .cha-overlay {
            position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
            display: none; align-items: center; justify-content: center;
            z-index: 2147483647; padding: 20px; opacity: 0; transition: opacity 0.3s ease;
        }
        .cha-overlay.is-active { display: flex; opacity: 1; }

       
        .cha-modal {
            background: white; width: 100%; max-width: 380px;
            padding: 40px; border-radius: 35px; text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
            transform: translateY(30px) scale(0.95); transition: all 0.4s ease;
        }
        .cha-overlay.is-active .cha-modal { transform: translateY(0) scale(1); }

        .cha-icon-box {
            width: 85px; height: 85px; background: #fff7ed; border-radius: 25px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 25px; transform: rotate(-3deg);
        }
        .cha-title { font-size: 24px; font-weight: 800; color: #1e293b; margin: 0 0 10px; }
        .cha-text { color: #64748b; font-size: 15px; line-height: 1.6; margin: 0 0 30px; }
        
        .cha-btn-main {
            background: #f97316; color: white; border: none; width: 100%;
            padding: 16px; border-radius: 16px; font-weight: 700; font-size: 16px;
            cursor: pointer; transition: background 0.2s;
            box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.3);
        }
        .cha-btn-main:hover { background: #ea580c; }
        .cha-btn-close {
            background: none; border: none; color: #94a3b8; margin-top: 20px;
            font-weight: 600; cursor: pointer; font-size: 14px;
        }

        @keyframes cha-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
            document.head.appendChild(style);

         
            const widgetRoot = document.createElement('div');
            widgetRoot.id = 'cha-widget-root';
            widgetRoot.innerHTML = `
        <div class="cha-fab" id="cha-trigger">
            <img src="${iconUrl}" alt="Cup">
        </div>
        <div class="cha-overlay" id="cha-overlay">
            <div class="cha-modal">
                <div class="cha-icon-box">
                    <img src="${iconUrl}" style="width: 45px;">
                </div>
                <h2 class="cha-title">Support @${username}</h2>
                <p class="cha-text">If you enjoy my work, consider buying me a hot cup of Cha to keep the creativity flowing!</p>
                <button class="cha-btn-main" id="cha-action">Buy a Cha ☕</button>
                <button class="cha-btn-close" id="cha-close">Maybe Later</button>
            </div>
        </div>
    `;
            document.body.appendChild(widgetRoot);

           

            const trigger = widgetRoot.querySelector('#cha-trigger');
            const overlay = widgetRoot.querySelector('#cha-overlay');
            const closeBtn = widgetRoot.querySelector('#cha-close');
            const actionBtn = widgetRoot.querySelector('#cha-action');

            trigger.addEventListener('click', () => {
                overlay.classList.add('is-active');
            });

            const hide = () => {
                overlay.classList.remove('is-active');
            };

            closeBtn.addEventListener('click', hide);
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) hide();
            });

            actionBtn.addEventListener('click', () => {
                window.open(redirectUrl, '_blank');
                hide();
            });

        })();
