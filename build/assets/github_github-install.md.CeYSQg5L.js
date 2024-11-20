import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.uL7cFZ_M.js";const u=JSON.parse('{"title":"GitHub Desktop","description":"","frontmatter":{"title":"GitHub Desktop","outline":"deep"},"headers":[],"relativePath":"github/github-install.md","filePath":"github/github-install.md","lastUpdated":null}'),n={name:"github/github-install.md"};function l(o,s,p,h,r,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="installing-github-desktop" tabindex="-1"><strong>Installing GitHub Desktop</strong> <a class="header-anchor" href="#installing-github-desktop" aria-label="Permalink to &quot;**Installing GitHub Desktop**&quot;">​</a></h1><p>GitHub Desktop simplifies the process of managing Git repositories and is available on Ubuntu, Windows, and macOS. Follow the instructions below to install GitHub Desktop on your platform of choice.</p><hr><h2 id="📦-install-github-desktop-on-ubuntu" tabindex="-1"><strong>📦 Install GitHub Desktop on Ubuntu</strong> <a class="header-anchor" href="#📦-install-github-desktop-on-ubuntu" aria-label="Permalink to &quot;**📦 Install GitHub Desktop on Ubuntu**&quot;">​</a></h2><p>Official package by <a href="https://github.com/shiftkey" target="_blank" rel="noreferrer">@shiftkey</a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Step 1: Add the @shiftkey package feed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://apt.packages.shiftkey.dev/gpg.key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dearmor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/keyrings/shiftkey-packages.gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Step 2: Add the repository to your sources list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main&quot; &gt; /etc/apt/sources.list.d/shiftkey-packages.list&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Step 3: Update your package manager and install GitHub Desktop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github-desktop</span></span></code></pre></div><p>For more details, visit the official <a href="https://github.com/shiftkey/desktop" target="_blank" rel="noreferrer">shiftkey GitHub Desktop repository</a>.</p><hr><h2 id="🖥️-install-github-desktop-on-windows" tabindex="-1"><strong>🖥️ Install GitHub Desktop on Windows</strong> <a class="header-anchor" href="#🖥️-install-github-desktop-on-windows" aria-label="Permalink to &quot;**🖥️ Install GitHub Desktop on Windows**&quot;">​</a></h2><ol><li>Download the GitHub Desktop installer for Windows from the <a href="https://desktop.github.com/" target="_blank" rel="noreferrer">official website</a>.</li><li>Run the installer and follow the on-screen instructions to complete the installation.</li><li>After installation, open GitHub Desktop and sign in with your GitHub account.</li></ol><p><strong>Requirements</strong>:</p><ul><li>Windows 10 or later.</li><li>Administrative privileges to install software.</li></ul><hr><h2 id="🍏-install-github-desktop-on-macos" tabindex="-1"><strong>🍏 Install GitHub Desktop on macOS</strong> <a class="header-anchor" href="#🍏-install-github-desktop-on-macos" aria-label="Permalink to &quot;**🍏 Install GitHub Desktop on macOS**&quot;">​</a></h2><ol><li>Download GitHub Desktop for macOS from the <a href="https://desktop.github.com/" target="_blank" rel="noreferrer">official website</a>.</li><li>Open the downloaded <code>.dmg</code> file and drag the GitHub Desktop app to your Applications folder.</li><li>Launch the app and sign in with your GitHub account.</li></ol><p><strong>Requirements</strong>:</p><ul><li>macOS 10.12 or later.</li><li>Administrative access to install applications.</li></ul><hr><h2 id="⚙️-alternative-linux-installation-methods" tabindex="-1"><strong>⚙️ Alternative Linux Installation Methods</strong> <a class="header-anchor" href="#⚙️-alternative-linux-installation-methods" aria-label="Permalink to &quot;**⚙️ Alternative Linux Installation Methods**&quot;">​</a></h2><p>If you&#39;re not using Ubuntu or prefer an alternative method, you can try:</p><h3 id="using-flatpak" tabindex="-1"><strong>Using Flatpak</strong> <a class="header-anchor" href="#using-flatpak" aria-label="Permalink to &quot;**Using Flatpak**&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flatpak</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flathub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> io.github.shiftey.Desktop</span></span></code></pre></div><h3 id="using-snap" tabindex="-1"><strong>Using Snap</strong> <a class="header-anchor" href="#using-snap" aria-label="Permalink to &quot;**Using Snap**&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github-desktop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --edge</span></span></code></pre></div><p>For Snap, the installation is still in the experimental stage. Use Flatpak for more stability.</p><hr><h2 id="🌐-additional-resources" tabindex="-1"><strong>🌐 Additional Resources</strong> <a class="header-anchor" href="#🌐-additional-resources" aria-label="Permalink to &quot;**🌐 Additional Resources**&quot;">​</a></h2><ul><li><a href="https://docs.github.com/en/desktop" target="_blank" rel="noreferrer">GitHub Desktop Documentation</a></li><li><a href="https://github.com/shiftkey/desktop" target="_blank" rel="noreferrer">Shiftkey GitHub Desktop for Linux</a></li><li><a href="https://desktop.github.com/" target="_blank" rel="noreferrer">Official GitHub Desktop Website</a></li></ul><hr><p>🎉 <em>Now you’re ready to use GitHub Desktop on your preferred operating system. Happy coding!</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### Updates and Additions:</span></span>
<span class="line"><span>1. **Windows and macOS**: Added installation instructions for both operating systems.</span></span>
<span class="line"><span>2. **Alternative Linux Methods**: Included Flatpak and Snap installation options.</span></span>
<span class="line"><span>3. **Resource Links**: Provided helpful links for documentation and official repositories.</span></span>
<span class="line"><span>4. **Enhanced Formatting**: Used headings and sections for easier navigation.</span></span></code></pre></div>`,31)]))}const g=i(n,[["render",l]]);export{u as __pageData,g as default};
