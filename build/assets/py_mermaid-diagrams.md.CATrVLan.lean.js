import{_ as s,c as i,a3 as e,o as n}from"./chunks/framework.uL7cFZ_M.js";const k=JSON.parse('{"title":"Mermaid Diagrams","description":"","frontmatter":{"title":"Mermaid Diagrams","category":"Python","dateCreated":"2024-11-19T00:00:00.000Z","type":"Notes","tags":["mermaid","diagrams","python"],"outline":"deep"},"headers":[],"relativePath":"py/mermaid-diagrams.md","filePath":"py/mermaid-diagrams.md","lastUpdated":null}'),t={name:"py/mermaid-diagrams.md"};function l(r,a,p,h,d,o){return n(),i("div",null,a[0]||(a[0]=[e(`<h1 id="mermaid-diagrams" tabindex="-1">Mermaid Diagrams <a class="header-anchor" href="#mermaid-diagrams" aria-label="Permalink to &quot;Mermaid Diagrams&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Mermaid is a simple markdown-like scripting language that generates diagrams such as flowcharts, sequence diagrams, Gantt charts, and more. It’s widely used in documentation tools like Markdown and MkDocs.</p><hr><h2 id="why-use-mermaid" tabindex="-1">Why Use Mermaid? <a class="header-anchor" href="#why-use-mermaid" aria-label="Permalink to &quot;Why Use Mermaid?&quot;">​</a></h2><ol><li><strong>Readable</strong>: Easy-to-understand syntax.</li><li><strong>Dynamic</strong>: Quick to edit and regenerate.</li><li><strong>Integrated</strong>: Works in many documentation tools.</li><li><strong>Versatile</strong>: Supports various diagram types.</li></ol><hr><h2 id="basic-syntax" tabindex="-1">Basic Syntax <a class="header-anchor" href="#basic-syntax" aria-label="Permalink to &quot;Basic Syntax&quot;">​</a></h2><ol><li>Start with the <code>mermaid</code> code block.</li><li>Specify the diagram type as the first line.</li><li>Add the nodes and relationships according to the type.</li></ol><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Start] --&gt; B[Process]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B --&gt; C[Decision]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|Yes| D[End]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|No| E[Retry]</span></span></code></pre></div><hr><h2 id="diagram-types" tabindex="-1">Diagram Types <a class="header-anchor" href="#diagram-types" aria-label="Permalink to &quot;Diagram Types&quot;">​</a></h2><h3 id="_1-flowcharts" tabindex="-1">1. Flowcharts <a class="header-anchor" href="#_1-flowcharts" aria-label="Permalink to &quot;1. Flowcharts&quot;">​</a></h3><p>Flowcharts represent processes and decisions.</p><h4 id="syntax" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR  // Direction: LR (Left to Right), TD (Top to Down)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Start] --&gt; B[Decision]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B --&gt;|Yes| C[End]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B --&gt;|No| D[Retry]</span></span></code></pre></div><h4 id="example-output" tabindex="-1">Example Output: <a class="header-anchor" href="#example-output" aria-label="Permalink to &quot;Example Output:&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start → Decision → Yes → End</span></span>
<span class="line"><span>                   → No → Retry</span></span></code></pre></div><hr><h3 id="_2-sequence-diagrams" tabindex="-1">2. Sequence Diagrams <a class="header-anchor" href="#_2-sequence-diagrams" aria-label="Permalink to &quot;2. Sequence Diagrams&quot;">​</a></h3><p>Sequence diagrams show interactions between components.</p><h4 id="syntax-1" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">participant User</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">participant Server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User-&gt;&gt;Server: Request</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Server--&gt;&gt;User: Response</span></span></code></pre></div><hr><h3 id="_3-gantt-charts" tabindex="-1">3. Gantt Charts <a class="header-anchor" href="#_3-gantt-charts" aria-label="Permalink to &quot;3. Gantt Charts&quot;">​</a></h3><p>Gantt charts visualize project timelines and task dependencies.</p><h4 id="syntax-2" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-2" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gantt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title Project Timeline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Planning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Task A :done, a1, 2024-11-01, 2024-11-05</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Task B :active, a2, 2024-11-06, 2024-11-10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Execution</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Task C : a3, 2024-11-11, 2024-11-20</span></span></code></pre></div><hr><h3 id="_4-class-diagrams" tabindex="-1">4. Class Diagrams <a class="header-anchor" href="#_4-class-diagrams" aria-label="Permalink to &quot;4. Class Diagrams&quot;">​</a></h3><p>Class diagrams represent object-oriented structures.</p><h4 id="syntax-3" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-3" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Vehicle {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  +int wheels</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  +start()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  +stop()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class Car {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  +int doors</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  +honk()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vehicle &lt;|-- Car</span></span></code></pre></div><hr><h3 id="_5-pie-charts" tabindex="-1">5. Pie Charts <a class="header-anchor" href="#_5-pie-charts" aria-label="Permalink to &quot;5. Pie Charts&quot;">​</a></h3><p>Pie charts represent proportional data.</p><h4 id="syntax-4" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-4" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title Language Usage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Python&quot; : 45</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;JavaScript&quot; : 35</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Others&quot; : 20</span></span></code></pre></div><hr><h3 id="_6-entity-relationship-diagrams" tabindex="-1">6. Entity-Relationship Diagrams <a class="header-anchor" href="#_6-entity-relationship-diagrams" aria-label="Permalink to &quot;6. Entity-Relationship Diagrams&quot;">​</a></h3><p>Used to model database relationships.</p><h4 id="syntax-5" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-5" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">erDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CUSTOMER {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        string name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        string email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ORDER {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        int order_id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        date order_date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CUSTOMER ||--o{ ORDER : places</span></span></code></pre></div><hr><h2 id="common-features" tabindex="-1">Common Features <a class="header-anchor" href="#common-features" aria-label="Permalink to &quot;Common Features&quot;">​</a></h2><h3 id="styling-nodes" tabindex="-1">Styling Nodes <a class="header-anchor" href="#styling-nodes" aria-label="Permalink to &quot;Styling Nodes&quot;">​</a></h3><ol><li>Add styles to nodes using the <code>style</code> keyword.</li><li>Syntax:<div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style node_id fill:#color,stroke:#color,stroke-width:value;</span></span></code></pre></div></li></ol><p>Example:</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Start] --&gt; B[Process]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style A fill:#f9f,stroke:#333,stroke-width:4px</span></span></code></pre></div><hr><h3 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h3><ol><li>Add clickable links to nodes.</li><li>Syntax:<div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Node Text] --&gt; B</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">click A &quot;https://example.com&quot;</span></span></code></pre></div></li></ol><hr><h3 id="subgraphs" tabindex="-1">Subgraphs <a class="header-anchor" href="#subgraphs" aria-label="Permalink to &quot;Subgraphs&quot;">​</a></h3><p>Group nodes into subgraphs for better organization.</p><h4 id="syntax-6" tabindex="-1">Syntax: <a class="header-anchor" href="#syntax-6" aria-label="Permalink to &quot;Syntax:&quot;">​</a></h4><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgraph Cluster 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subgraph Cluster 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A --&gt; C</span></span></code></pre></div><hr><h2 id="tools-supporting-mermaid" tabindex="-1">Tools Supporting Mermaid <a class="header-anchor" href="#tools-supporting-mermaid" aria-label="Permalink to &quot;Tools Supporting Mermaid&quot;">​</a></h2><ol><li><strong>MkDocs</strong>: Integrates Mermaid diagrams into documentation.</li><li><strong>VSCode</strong>: Provides live preview extensions for Mermaid.</li><li><strong>Obsidian</strong>: Supports Mermaid in Markdown notes.</li></ol><hr><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><ol><li>Mermaid makes it easy to create professional diagrams using a simple scripting language.</li><li>Supported diagram types include flowcharts, sequence diagrams, Gantt charts, and more.</li><li>Integrate Mermaid diagrams into your documentation workflow for clear and visual explanations.</li></ol>`,64)]))}const E=s(t,[["render",l]]);export{k as __pageData,E as default};