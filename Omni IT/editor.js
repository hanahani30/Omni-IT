// ==================== CODE EDITOR FUNCTIONALITY ====================

// ========== JAVASCRIPT EDITOR ==========
const jsEditor = document.getElementById('jsEditor');
const jsOutput = document.getElementById('jsOutput');
const runJsBtn = document.getElementById('runJsBtn');
const clearJsBtn = document.getElementById('clearJsBtn');

if (runJsBtn) {
    runJsBtn.addEventListener('click', () => {
        jsOutput.innerHTML = '';
        try {
            // Capture console.log output
            let output = [];
            const originalLog = console.log;
            console.log = function (...args) {
                output.push(args.map(arg => {
                    if (typeof arg === 'object') {
                        return JSON.stringify(arg, null, 2);
                    }
                    return String(arg);
                }).join(' '));
            };

            // Execute the code
            eval(jsEditor.value);

            // Restore console.log
            console.log = originalLog;

            // Display output
            if (output.length > 0) {
                jsOutput.innerHTML = `<div class="output-result success">${output.join('\n')}</div>`;
            } else {
                jsOutput.innerHTML = `<div class="output-result success">✓ تم تنفيذ الكود بنجاح (بدون مخرجات)</div>`;
            }
        } catch (error) {
            jsOutput.innerHTML = `<div class="output-result error">❌ خطأ:\n${error.message}</div>`;
        }
    });
}

if (clearJsBtn) {
    clearJsBtn.addEventListener('click', () => {
        jsEditor.value = '';
        jsOutput.innerHTML = '';
    });
}

// ========== HTML EDITOR ==========
const htmlEditor = document.getElementById('htmlEditor');
const htmlOutput = document.getElementById('htmlOutput');
const runHtmlBtn = document.getElementById('runHtmlBtn');
const clearHtmlBtn = document.getElementById('clearHtmlBtn');

if (runHtmlBtn) {
    runHtmlBtn.addEventListener('click', () => {
        try {
            // Create an iframe to isolate the HTML
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '6px';
            
            htmlOutput.innerHTML = '';
            htmlOutput.appendChild(iframe);
            
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(htmlEditor.value);
            iframeDoc.close();
        } catch (error) {
            htmlOutput.innerHTML = `<div class="output-result error">❌ خطأ:\n${error.message}</div>`;
        }
    });
}

if (clearHtmlBtn) {
    clearHtmlBtn.addEventListener('click', () => {
        htmlEditor.value = '';
        htmlOutput.innerHTML = '';
    });
}

// ========== CSS EDITOR ==========
const cssEditor = document.getElementById('cssEditor');
const cssOutput = document.getElementById('cssOutput');
const runCssBtn = document.getElementById('runCssBtn');
const clearCssBtn = document.getElementById('clearCssBtn');

if (runCssBtn) {
    runCssBtn.addEventListener('click', () => {
        try {
            // Clear previous content
            let styleId = 'dynamic-css-style';
            let existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                existingStyle.remove();
            }

            // Create and inject style
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = cssEditor.value;
            document.head.appendChild(style);

            // Show preview HTML with sample elements
            cssOutput.innerHTML = `
                <div style="padding: 20px; background: white; border-radius: 6px;">
                    <h3 style="color: #2c3e50; margin-bottom: 15px;">معاينة CSS</h3>
                    <div class="preview-container" style="border: 2px dashed #ddd; padding: 20px; border-radius: 6px; background: #fafafa;">
                        <div class="box"></div>
                        <p>نص تجريبي للمعاينة</p>
                        <button class="button">زر</button>
                    </div>
                    <p style="color: #666; margin-top: 15px; font-size: 0.9rem;">💡 استخدم .box, p, .button للعناصر أعلاه</p>
                </div>
            `;
        } catch (error) {
            cssOutput.innerHTML = `<div class="output-result error">❌ خطأ في CSS:\n${error.message}</div>`;
        }
    });
}

if (clearCssBtn) {
    clearCssBtn.addEventListener('click', () => {
        cssEditor.value = '';
        cssOutput.innerHTML = '';
        let styleId = 'dynamic-css-style';
        let existingStyle = document.getElementById(styleId);
        if (existingStyle) {
            existingStyle.remove();
        }
    });
}

// ========== PYTHON EDITOR ==========
const pythonEditor = document.getElementById('pythonEditor');
const pythonOutput = document.getElementById('pythonOutput');
const copyPythonBtn = document.getElementById('copyPythonBtn');
const clearPythonBtn = document.getElementById('clearPythonBtn');

if (copyPythonBtn) {
    copyPythonBtn.addEventListener('click', () => {
        if (pythonEditor.value) {
            navigator.clipboard.writeText(pythonEditor.value).then(() => {
                const originalText = copyPythonBtn.textContent;
                copyPythonBtn.textContent = '✓ تم النسخ!';
                copyPythonBtn.style.backgroundColor = '#27ae60';
                setTimeout(() => {
                    copyPythonBtn.textContent = originalText;
                    copyPythonBtn.style.backgroundColor = '';
                }, 2000);
            });
        }
    });
}

if (clearPythonBtn) {
    clearPythonBtn.addEventListener('click', () => {
        pythonEditor.value = '';
        pythonOutput.innerHTML = 'اكتب الكود وانسخه لتشغيله على جهازك';
    });
}

// ========== JAVA EDITOR ==========
const javaEditor = document.getElementById('javaEditor');
const javaOutput = document.getElementById('javaOutput');
const copyJavaBtn = document.getElementById('copyJavaBtn');
const clearJavaBtn = document.getElementById('clearJavaBtn');

if (copyJavaBtn) {
    copyJavaBtn.addEventListener('click', () => {
        if (javaEditor.value) {
            navigator.clipboard.writeText(javaEditor.value).then(() => {
                const originalText = copyJavaBtn.textContent;
                copyJavaBtn.textContent = '✓ تم النسخ!';
                copyJavaBtn.style.backgroundColor = '#27ae60';
                setTimeout(() => {
                    copyJavaBtn.textContent = originalText;
                    copyJavaBtn.style.backgroundColor = '';
                }, 2000);
            });
        }
    });
}

if (clearJavaBtn) {
    clearJavaBtn.addEventListener('click', () => {
        javaEditor.value = '';
        javaOutput.innerHTML = 'اكتب الكود وانسخه لتشغيله على جهازك';
    });
}

// ========== MORE LANGUAGES EDITOR (C++, C, etc.) ==========
const cppEditor = document.getElementById('cppEditor');
const moreOutput = document.getElementById('moreOutput');
const copyMoreBtn = document.getElementById('copyMoreBtn');
const clearMoreBtn = document.getElementById('clearMoreBtn');

if (copyMoreBtn) {
    copyMoreBtn.addEventListener('click', () => {
        if (cppEditor.value) {
            navigator.clipboard.writeText(cppEditor.value).then(() => {
                const originalText = copyMoreBtn.textContent;
                copyMoreBtn.textContent = '✓ تم النسخ!';
                copyMoreBtn.style.backgroundColor = '#27ae60';
                setTimeout(() => {
                    copyMoreBtn.textContent = originalText;
                    copyMoreBtn.style.backgroundColor = '';
                }, 2000);
            });
        }
    });
}

if (clearMoreBtn) {
    clearMoreBtn.addEventListener('click', () => {
        cppEditor.value = '';
        moreOutput.innerHTML = 'اكتب الكود وانسخه لتشغيله على جهازك';
    });
}
