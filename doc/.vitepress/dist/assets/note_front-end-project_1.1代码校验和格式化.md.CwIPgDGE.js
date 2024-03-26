import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.Bx6qu0xe.js";const t="/assets/1.DfMn5K1l.png",y=JSON.parse('{"title":"前端工程化","description":"","frontmatter":{},"headers":[],"relativePath":"note/front-end-project/1.1代码校验和格式化.md","filePath":"note/front-end-project/1.1代码校验和格式化.md"}'),l={name:"note/front-end-project/1.1代码校验和格式化.md"},p=i('<h1 id="前端工程化" tabindex="-1">前端工程化 <a class="header-anchor" href="#前端工程化" aria-label="Permalink to &quot;前端工程化&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>本文介绍了前端项目中代码格式校验工具，以及 git 提交时代码校验和提交信息校验的工具的介绍和配置。</p><p>在概述中将简单介绍各个工具的功能以及配置文件的位置。</p><h3 id="代码校验和格式化" tabindex="-1">代码校验和格式化 <a class="header-anchor" href="#代码校验和格式化" aria-label="Permalink to &quot;代码校验和格式化&quot;">​</a></h3><p>实现的功能是：</p><ol><li>检测代码是否满足规则，对不满足规则的进行标红</li><li>保存代码的时候自动进行格式化</li></ol><p>代码格式化需要两个工具搭配代码编辑器完成</p><table><thead><tr><th>工具名称</th><th>功能</th><th>配置</th></tr></thead><tbody><tr><td>eslint</td><td>校验代码、格式化代码。具体的校验规则定义在配置文件里</td><td>.eslintrc.js</td></tr><tr><td>prettier</td><td>格式化代码（eslint 格式化能力不够）</td><td>.prettierrc</td></tr><tr><td>vscode</td><td>默认代码风格，如默认缩进 4 个空格，字体大小等保存代码的时候执行调用 eslint、prettier 进行格式化</td><td>.vscode/settings.json</td></tr></tbody></table><h3 id="git-提交的代码和提交信息校验" tabindex="-1">git 提交的代码和提交信息校验 <a class="header-anchor" href="#git-提交的代码和提交信息校验" aria-label="Permalink to &quot;git 提交的代码和提交信息校验&quot;">​</a></h3><p>实现的功能是：</p><ol><li>校验暂存区的代码格式是否满足定义的规则</li><li>校验提交信息是否满足定义的规则</li></ol><p>暂存区的代码校验规则是 eslint 定义的规则，只是需要拿到暂存区代码的钩子</p><p>提交信息校验只做了提交类型校验，只能包含指定类型：release、build、update、docs、add、fix、perf、refactor、revert、style、test、merge</p><table><thead><tr><th>工具名称</th><th>功能</th><th>配置</th></tr></thead><tbody><tr><td>husky</td><td>提供 git 钩子，主要用到了两个钩子，pre-commit，commit-msgpre-commit 是提交前拿到暂存区的代码的钩子，在这里会做一次代码校验，处理这个钩子用到的工具是 lint-stagedcommit-msg 是提交信息的钩子，在这里会校验提交信息，处理这个钩子用到的工具是 commitlint</td><td>.husky/pre-commit.husky/commit-msg</td></tr><tr><td>lint-staged</td><td>校验暂存区代码</td><td>package.json<code>{ ... &quot;lint-staged&quot;: { &quot;*.js, *.ts, *.vue, *.jsx, *.tsx&quot;: [ &quot;eslint --fix&quot;, &quot;prettier&quot; ], &quot;*.md, *.less, *.scss&quot;: [ &quot;prettier&quot; ] }, }</code></td></tr><tr><td>commitlint</td><td>校验提交信息</td><td>commitlint.config.jk</td></tr></tbody></table><h3 id="交互式提交工具" tabindex="-1">交互式提交工具 <a class="header-anchor" href="#交互式提交工具" aria-label="Permalink to &quot;交互式提交工具&quot;">​</a></h3><p>提供了一个终端交互式提交工具，采用 commitizen，配合适配器进行提问</p><p>全局安装 commitizen，npm install -g commitizen，就可以使用 cz 命令在终端进行选项式提交 <img src="'+t+`" alt="这是图片" title="Magic Gardens"></p><p>配置的话，需要在package.json中指定适配器位置</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;commitizen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./cz.cjs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>cz.js文件里面包含了提问的信息，可以根据实际情况修改，也可以用现有开源的适配器，如cz-git。</p><h2 id="前端工程化概述" tabindex="-1">前端工程化概述 <a class="header-anchor" href="#前端工程化概述" aria-label="Permalink to &quot;前端工程化概述&quot;">​</a></h2><p>前端工程化是指：在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。</p><p>就像是往一个杂物间存东西，当东西比较少，随便乱丢都找得到，但是当东西数量多起来，找起来就不容易了。这个时候如果有个柜子之类的工具就可以更好分类，以便查找的时候更快速。</p><p>前端工程化在项目逐渐壮大起来的时候是有必要的，随意散乱的结构和布局会使得维护困难，因此我们需要一些方法和工具帮助我们实现前端工程化。</p><h2 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h2><p>代码规范是前端工程化的一个方面，代码规范可以帮助我们统一团队代码风格，降低阅读难度，同时也可以借助工具提前发现部分错误，并修复。</p><p>代码规范主要解决的问题是：保证编码风格一致，使项目易于维护，因为团队内任何人都可以快速理解并修改。</p><p>这里我们针对两方面进行规范：</p><blockquote><p>一是代码格式规范，如代码缩进统一（一个tab或者两个空格）；</p><p>二是<code>git</code>提交规范，进行代码检查以及提交信息规范，例如提交信息<code>fix: 修复xxx，xxx</code></p></blockquote><p><strong>初始化一键代码校验、格式化、git提交检验、辅助提交工具</strong></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D eslint eslint-plugin-vue prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged commitlint commitizen editor temp word-wrap find-config</span></span></code></pre></div><h3 id="_1-代码格式规范" tabindex="-1">1. 代码格式规范 <a class="header-anchor" href="#_1-代码格式规范" aria-label="Permalink to &quot;1. 代码格式规范&quot;">​</a></h3><p>代码格式规范问题，我们通过 <code>ESLint</code> + <code>Prettier</code> + <code>VSCode 配置</code> 配合进行处理，最终达到了在保存代码时，自动规范化代码格式的目的。</p><p><code>Eslint</code>是什么？它和<code>Prettier</code>有什么关系？一开始，我以为他俩干的是同一件事——格式化代码。</p><p>其实可以简单这样理解，二者配合的目的就是让我们的代码满足指定的格式。</p><p><code>Eslint</code>具备的作用是：</p><ul><li>检查语法</li><li>找到问题</li><li>修复问题</li></ul><p>我们使用<code>eslint</code>来实现语法检查，举个例子，变量定义后未使用会报错。</p><p>对于格式化的功能，我们需要借助<code>prettier</code>辅助，将<code>prettier</code>集成到<code>eslint</code>上，可以完成一些<code>eslint</code>无法修复的格式，比如，当某一行代码超过长度规则限制，<code>eslint</code>只会给一个<code>warning</code>，而<code>prettier</code>会格式化它。详细可参考：<a href="https://github.com/prettier/prettier-eslint/issues/101" target="_blank" rel="noreferrer">https://github.com/prettier/prettier-eslint/issues/101</a></p><p><strong>注意：编辑器需要安装eslint和prettier插件</strong></p><p>编辑器安装<code>eslint</code>插件可以对不满足规则的语句<strong>波浪线标红</strong>，<code>prettier</code>插件可以配合<code>vscode</code>设置实现保存代码时<strong>自动格式化</strong></p><h5 id="_1-1-代码检查工具eslint" tabindex="-1">1.1 代码检查工具<code>Eslint</code> <a class="header-anchor" href="#_1-1-代码检查工具eslint" aria-label="Permalink to &quot;1.1 代码检查工具\`Eslint\`&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D eslint eslint-plugin-vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npx eslint --init</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>init\` 命令会自动生成 \`.eslintrc.js</span></span></code></pre></div><p>我们直接CV现有的配置（后续根据需要调整）：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    root: true,</span></span>
<span class="line"><span>    ignorePatterns: [&#39;node_moduls/*&#39;],</span></span>
<span class="line"><span>    env: {</span></span>
<span class="line"><span>        browser: true,</span></span>
<span class="line"><span>        es2021: true,</span></span>
<span class="line"><span>        node: true,</span></span>
<span class="line"><span>        commonjs: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/essential&#39;, &#39;prettier&#39;],</span></span>
<span class="line"><span>    overrides: [],</span></span>
<span class="line"><span>    parserOptions: {</span></span>
<span class="line"><span>        ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span>        sourceType: &#39;module&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [&#39;vue&#39;, &#39;prettier&#39;],</span></span>
<span class="line"><span>    rules: {</span></span>
<span class="line"><span>        &#39;linebreak-style&#39;: [&#39;error&#39;, &#39;unix&#39;],</span></span>
<span class="line"><span>        &#39;no-multiple-empty-lines&#39;: [1, { max: 2 }], //空行最多不能超过2行</span></span>
<span class="line"><span>        &#39;vue/multi-word-component-names&#39;: &#39;off&#39; //vue组件名去掉多单词限制</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_1-1-1-eslint规则" tabindex="-1">1.1.1 <code>eslint</code>规则 <a class="header-anchor" href="#_1-1-1-eslint规则" aria-label="Permalink to &quot;1.1.1 \`eslint\`规则&quot;">​</a></h6><p><code>.eslintrc.js</code> 文件<code>rule</code>规则参考：(注意，我们在<code>eslint</code>中控制语法层面的，样式风格交给<code>prettier</code>)</p><p><a href="https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/rules/" target="_blank" rel="noreferrer">所有规则的说明</a>，<a href="http://www.verydoc.net/eslint/00003312.html" target="_blank" rel="noreferrer">中文详解（每条规则）</a></p><table><thead><tr><th>rule</th><th>介绍</th></tr></thead><tbody><tr><td><a href="https://cn.eslint.org/docs/rules/for-direction" target="_blank" rel="noreferrer"> for-direction</a></td><td>强制 “for” 循环中更新子句的计数器朝着正确的方向移动</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/getter-return" target="_blank" rel="noreferrer">getter-return</a></td><td>强制 getter 函数中出现 <code>return</code> 语句</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-async-promise-executor" target="_blank" rel="noreferrer">no-async-promise-executor</a></td><td>禁止使用异步函数作为 Promise executor</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-await-in-loop" target="_blank" rel="noreferrer">no-await-in-loop</a></td><td>禁止在循环中出现 <code>await</code></td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-compare-neg-zero" target="_blank" rel="noreferrer">no-compare-neg-zero</a></td><td>禁止与 -0 进行比较</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-cond-assign" target="_blank" rel="noreferrer">no-cond-assign</a></td><td>禁止条件表达式中出现赋值操作符</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-console" target="_blank" rel="noreferrer">no-console</a></td><td>禁用 <code>console</code></td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-constant-condition" target="_blank" rel="noreferrer">no-constant-condition</a></td><td>禁止在条件中使用常量表达式</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-control-regex" target="_blank" rel="noreferrer">no-control-regex</a></td><td>禁止在正则表达式中使用控制字符</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-debugger" target="_blank" rel="noreferrer">no-debugger</a></td><td>禁用 <code>debugger</code></td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-dupe-args" target="_blank" rel="noreferrer">no-dupe-args</a></td><td>禁止 <code>function</code> 定义中出现重名参数</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-dupe-keys" target="_blank" rel="noreferrer">no-dupe-keys</a></td><td>禁止对象字面量中出现重复的 key</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-duplicate-case" target="_blank" rel="noreferrer">no-duplicate-case</a></td><td>禁止出现重复的 case 标签</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-empty" target="_blank" rel="noreferrer">no-empty</a></td><td>禁止出现空语句块</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-empty-character-class" target="_blank" rel="noreferrer">no-empty-character-class</a></td><td>禁止在正则表达式中使用空字符集</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-ex-assign" target="_blank" rel="noreferrer">no-ex-assign</a></td><td>禁止对 <code>catch</code> 子句的参数重新赋值</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-extra-boolean-cast" target="_blank" rel="noreferrer">no-extra-boolean-cast</a></td><td>禁止不必要的布尔转换</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-extra-parens" target="_blank" rel="noreferrer">no-extra-parens</a></td><td>禁止不必要的括号</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-extra-semi" target="_blank" rel="noreferrer">no-extra-semi</a></td><td>禁止不必要的分号</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-func-assign" target="_blank" rel="noreferrer">no-func-assign</a></td><td>禁止对 <code>function</code> 声明重新赋值</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-inner-declarations" target="_blank" rel="noreferrer">no-inner-declarations</a></td><td>禁止在嵌套的块中出现变量声明或 <code>function</code> 声明</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-invalid-regexp" target="_blank" rel="noreferrer">no-invalid-regexp</a></td><td>禁止 <code>RegExp</code> 构造函数中存在无效的正则表达式字符串</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-irregular-whitespace" target="_blank" rel="noreferrer">no-irregular-whitespace</a></td><td>禁止不规则的空白</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-misleading-character-class" target="_blank" rel="noreferrer">no-misleading-character-class</a></td><td>不允许在字符类语法中出现由多个代码点组成的字符</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-obj-calls" target="_blank" rel="noreferrer">no-obj-calls</a></td><td>禁止把全局对象作为函数调用</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-prototype-builtins" target="_blank" rel="noreferrer">no-prototype-builtins</a></td><td>禁止直接调用 <code>Object.prototypes</code> 的内置属性</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-regex-spaces" target="_blank" rel="noreferrer">no-regex-spaces</a></td><td>禁止正则表达式字面量中出现多个空格</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-sparse-arrays" target="_blank" rel="noreferrer">no-sparse-arrays</a></td><td>禁用稀疏数组</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-template-curly-in-string" target="_blank" rel="noreferrer">no-template-curly-in-string</a></td><td>禁止在常规字符串中出现模板字面量占位符语法</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-unexpected-multiline" target="_blank" rel="noreferrer">no-unexpected-multiline</a></td><td>禁止出现令人困惑的多行表达式</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-unreachable" target="_blank" rel="noreferrer">no-unreachable</a></td><td>禁止在 <code>return</code>、<code>throw</code>、<code>continue</code> 和 <code>break</code> 语句之后出现不可达代码</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-unsafe-finally" target="_blank" rel="noreferrer">no-unsafe-finally</a></td><td>禁止在 <code>finally</code> 语句块中出现控制流语句</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/no-unsafe-negation" target="_blank" rel="noreferrer">no-unsafe-negation</a></td><td>禁止对关系运算符的左操作数使用否定操作符</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/require-atomic-updates" target="_blank" rel="noreferrer">require-atomic-updates</a></td><td>禁止由于 <code>await</code> 或 <code>yield</code>的使用而可能导致出现竞态条件的赋值</td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/use-isnan" target="_blank" rel="noreferrer">use-isnan</a></td><td>要求使用 <code>isNaN()</code> 检查 <code>NaN</code></td></tr><tr><td><a href="https://cn.eslint.org/docs/rules/valid-typeof" target="_blank" rel="noreferrer">valid-typeof</a></td><td>强制 <code>typeof</code> 表达式与有效的字符串进行比较</td></tr></tbody></table><h6 id="_1-1-2-eslint扩展" tabindex="-1">1.1.2 <code>eslint</code>扩展 <a class="header-anchor" href="#_1-1-2-eslint扩展" aria-label="Permalink to &quot;1.1.2 \`eslint\`扩展&quot;">​</a></h6><p>在<code>.eslintrc.js</code>中<code>rules</code>用来配置<code>ESLint</code>的规则，具体配置规则的方法请参考官网 <a href="https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/user-guide/configuring%23configuring-rules" target="_blank" rel="noreferrer">如何配置规则</a> 以及 <a href="https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/rules/" target="_blank" rel="noreferrer">所有规则的说明</a>，这里不作详细介绍，同样为了方便使用，<code>ESLint</code>使用<code>extends</code>配置来一次性生效一整套规则。</p><p><code>ESint</code>支持<strong>三种类型</strong>的扩展：</p><ul><li><code>eslint:</code> 开头的 <code>ESLint</code>官方扩展 包括 <code>eslint:recommended</code> 和 <code>eslint:all</code>，其中 <code>eslint:recommended</code>是推荐的一套规则，<code>eslint:all</code> 是 <code>ESLint</code>中的所有规则，不推荐使用，因为可能随时被 <code>ESLint</code>更改。</li><li>共享的扩展 通过 <code>npm</code> 包提供一套共享的配置，包名前缀必须为<code>eslint-config-</code>，<code>extends</code>属性值可以省略包名的前缀<code>eslint-config-</code>。 <code>package.json</code> 中 <code>eslint-config-standard</code> 这个包提供的一套规则。</li><li>插件中提供的扩展 我们使用的<code>eslint-plugin-prettier</code> 插件，还有<code>eslint-plugin-vue</code>插件，他们针对某一类具体的文件进行格式化。</li></ul><p><code>vue</code><a href="https://eslint.vuejs.org/user-guide/#usage" target="_blank" rel="noreferrer">插件配置</a></p><h6 id="_1-1-3-rules、extends、plugins" tabindex="-1">1.1.3 rules、extends、plugins <a class="header-anchor" href="#_1-1-3-rules、extends、plugins" aria-label="Permalink to &quot;1.1.3 rules、extends、plugins&quot;">​</a></h6><p>参考文章：<a href="https://juejin.cn/post/6859291468138774535" target="_blank" rel="noreferrer">Eslint中plugins和extends的区别</a>、<a href="https://juejin.cn/post/7136458949322080292#heading-8" target="_blank" rel="noreferrer">深入浅出 Eslint，告别 Lint 恐惧症</a></p><p><strong>rules：</strong></p><p>安装 lint 工具的基本目的，就是对代码进行各种限定，统一风格。因为每个人、每个团队追求的风格不同，所以工具也会提供各种配置，帮助限定代码</p><p><strong>extends：</strong></p><p>对于不同项目，如果希望使用相同的 rules，直接复制粘贴显然不是一个好方法，一是 rules 太多，配置文件会显得很乱，二是无法同步更新。</p><p>推荐使用的方法是把所需的 rules 抽离成一个 npm 包，需要的时候再通过 extends 引用。而且对于这些抽离出来的包，有着统一的命名规范</p><p>plugins与rules结合是eslint基础能力，extends可以看做是去集成一个个配置方案的最佳实践</p><p>允许 extends 多个模块，如果规则冲突，位置靠后的包将覆盖前面的。<strong>rules 中的规则相同，并且优先级恒定高于 extends</strong></p><p>原先还需要自己一条条选择，这样就可以直接把官方配置好的最佳实践直接拿来用。如果碰到和自己风格或者规范有冲突的规则，那直接在rules中重新定义就可以了，毕竟冲突的规则往往都没有多少。</p><p>extends扩展的规则包含了一套plugin和rules，但是和默认的eslint规则冲突的时候，eslint的相应规则会失效，不会检查这条规则。</p><p><strong>plugins：</strong></p><p>虽然官方提供了很多规则，但是总有覆盖不到的情况。这时候可以使用 plugin 定义<strong>自己的规则（如Vue、React）</strong></p><p>声明了 Plugin 时仅表示我们引入了该规则对应的集合，并不代表会立即启动。需要我们<strong>手动在</strong> <code>**rules**</code> <strong>中去声明</strong>对应插件的规则。</p><p>plugins只是加载了插件，可以理解赋予了eslint解析规则的检查能力，真正开启这个规则的检查能力还是要通过<strong>rules配置</strong>。（一个插件库里面往往有几十个新规则，并不是每一个规则都需要开启的，这是时候就要根据自己的需求来配置相关检查规则）</p><h5 id="_1-2-代码风格工具prettier" tabindex="-1">1.2 代码风格工具prettier <a class="header-anchor" href="#_1-2-代码风格工具prettier" aria-label="Permalink to &quot;1.2 代码风格工具prettier&quot;">​</a></h5><h6 id="_1-2-1-安装和配置" tabindex="-1">1.2.1 安装和配置 <a class="header-anchor" href="#_1-2-1-安装和配置" aria-label="Permalink to &quot;1.2.1 安装和配置&quot;">​</a></h6><p>安装工具：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D prettier eslint-config-prettier eslint-plugin-prettier</span></span></code></pre></div><p>创建 <code>.prettierrc</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;useTabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tabWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;trailingComma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;endOfLine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lf&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h6 id="_1-2-2-设置忽略文件" tabindex="-1">1.2.2 设置忽略文件 <a class="header-anchor" href="#_1-2-2-设置忽略文件" aria-label="Permalink to &quot;1.2.2 设置忽略文件&quot;">​</a></h6><p>可以设置<code>.prettierignore</code>忽略文件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/dist/*</span></span>
<span class="line"><span>.local</span></span>
<span class="line"><span>.output.js</span></span>
<span class="line"><span>/node_modules/**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**/*.svg</span></span>
<span class="line"><span>**/*.sh</span></span>
<span class="line"><span>*.lock</span></span>
<span class="line"><span>package-*.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/public/*</span></span>
<span class="line"><span>**/iconSvg/*</span></span>
<span class="line"><span>**/third_party/*</span></span>
<span class="line"><span>/docs/*</span></span>
<span class="line"><span>/.history/*</span></span></code></pre></div><h6 id="_1-2-3-解决冲突" tabindex="-1">1.2.3 解决冲突 <a class="header-anchor" href="#_1-2-3-解决冲突" aria-label="Permalink to &quot;1.2.3 解决冲突&quot;">​</a></h6><p>由于<code>ESLint</code>定义了一些<code>js</code>的代码格式化的约束，导致其与Prettier存在一些冲突。如：</p><ul><li><code>ESLint</code>默认语句结尾不加分号，Prettier默认语句结尾加分号；</li><li><code>ESLint</code>默认强制使用单引号，Prettier默认使用双引号；</li><li><code>ESLint</code>默认句末减少不必要的逗号，Prettier默认尽可能多使用逗号等等</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eslint-config-prettier\`和\`eslint-plugin-prettier</span></span></code></pre></div><ul><li><code>eslint-config-prettier</code>：禁用掉了一些不必要的以及和 <code>Prettier</code> 相冲突的 <code>ESLint</code> 规则；</li><li><code>eslint-plugin-prettier</code>：将<code>prettier</code> 作为<code>ESLint</code>的规则来使用，相当于代码不符合 Prettier 的标准时，会报一个<code>ESLint</code>错误，同时也可以通过<code>eslint --fix</code>来进行格式化；这样就相当于将<code>Prettier</code>整合进了<code>ESLint</code>中；</li></ul><p>使用extends扩展，将会禁掉Eslint的标红报错，只使用prettier的格式化</p><p>使用plugin插件，不会禁用Eslint的规则，会有标红的功能，个人比较喜欢plugin的效果</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>	extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/essential&#39;, &#39;prettier&#39;],	//注意，prettier写到最后，避免被其他插件覆盖</span></span>
<span class="line"><span>	plugin: [&#39;vue&#39;, &#39;prettier&#39;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_1-3-vscode插件" tabindex="-1">1.3 <code>vscode</code>插件 <a class="header-anchor" href="#_1-3-vscode插件" aria-label="Permalink to &quot;1.3 \`vscode\`插件&quot;">​</a></h5><p>我们团队大部分用的是vscode编辑器，如果使用其他编辑器，使用<a href="https://editorconfig-specification.readthedocs.io/" target="_blank" rel="noreferrer">EditorConfig</a>进行配置，可以参考<a href="https://www.jianshu.com/p/c727c3c945bb" target="_blank" rel="noreferrer">前端editorconfig使用详解</a></p><p><code>vscode</code>编辑器安装<code>eslint</code>插件可以在保存的时候进行代码检查。</p><p>在项目根目录新建<code>.vscode</code>文件夹，在文件夹下新建<code>settings.json</code></p><p>编辑<code>settings.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor.codeActionsOnSave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;source.fixAll.eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //设置代码保存时需要做的工作——启用保存时自动修复,默认只支持.js文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor.formatOnSave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.eol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置编辑器行尾以LF格式结尾，以匹配git远程代码库</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor.defaultFormatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//主要是因为vscode lint规则与project lint规则不一致，保存的时候按A规则format，编辑、提交时又按B规则校验，规则不一致则来回format。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prettier.tabWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.trimTrailingWhitespace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.trimFinalNewlines&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>参考链接：<a href="https://juejin.cn/post/7050127881371910152" target="_blank" rel="noreferrer">ESlint与Prettier配置指南</a>、<a href="https://juejin.cn/post/6938687606687432740" target="_blank" rel="noreferrer">Prettier配置指南</a></p><h3 id="_2-git提交规范" tabindex="-1">2. git提交规范 <a class="header-anchor" href="#_2-git提交规范" aria-label="Permalink to &quot;2. git提交规范&quot;">​</a></h3><p>我们使用<code>husky</code>检测<code>git</code>钩子，<code>lint-staged</code>规范化暂存区代码，<code>commitlint</code>规范化提交信息。</p><h5 id="_2-1-git钩子介绍" tabindex="-1">2.1 git钩子介绍 <a class="header-anchor" href="#_2-1-git钩子介绍" aria-label="Permalink to &quot;2.1 git钩子介绍&quot;">​</a></h5><p>Git 有很多的 hooks, 让我们在不同的阶段,对代码进行不同的操作,控制提交到仓库的代码的规范性,和准确性, 以下只是几个常用的钩子</p><table><thead><tr><th>git钩子</th><th>描述</th></tr></thead><tbody><tr><td><code>pre-commit</code></td><td>判断提交的代码是否符合规范</td></tr><tr><td><code>commit-msg</code></td><td>判断 commit 信息是否符合规范</td></tr><tr><td><code>pre-push</code></td><td>执行测试,避免对以前的内容造成影响</td></tr></tbody></table><h5 id="_2-2-工具介绍" tabindex="-1">2.2 工具介绍 <a class="header-anchor" href="#_2-2-工具介绍" aria-label="Permalink to &quot;2.2 工具介绍&quot;">​</a></h5><ul><li><code>husky</code>：操作git钩子的工具</li><li><code>lint-staged</code>：本地暂存代码检查工具</li><li><code>commitlint</code>：提交信息校验工具</li><li><code>commitizen</code>：辅助提交信息 ，<strong>全局安装</strong>后可以使用<code>cz</code>命令，选项式提交<code>git</code></li></ul><h5 id="_2-3-安装和配置" tabindex="-1">2.3 安装和配置 <a class="header-anchor" href="#_2-3-安装和配置" aria-label="Permalink to &quot;2.3 安装和配置&quot;">​</a></h5><h6 id="_2-3-1-husky" tabindex="-1">2.3.1 husky <a class="header-anchor" href="#_2-3-1-husky" aria-label="Permalink to &quot;2.3.1 husky&quot;">​</a></h6><p><a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">官方文档</a></p><p><a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">官方文档</a></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D husky lint-staged</span></span></code></pre></div><p>在<code>package.json</code>中添加脚本</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm set-script prepare &quot;husky install&quot;</span></span></code></pre></div><p>初始化<code>husky</code>，将<code>git hooks</code>钩子交由，<code>husky</code>执行。会在根目录创建 <code>.husky</code> 文件夹</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn prepare</span></span></code></pre></div><h6 id="_2-3-2-lint-staged" tabindex="-1">2.3.2 lint-staged <a class="header-anchor" href="#_2-3-2-lint-staged" aria-label="Permalink to &quot;2.3.2 lint-staged&quot;">​</a></h6><p>检测<code>pre-commit</code>钩子，执行 <code>npx lint-staged</code> 指令</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx husky add .husky/pre-commit &quot;npx lint-staged&quot;</span></span></code></pre></div><p><a href="https://github.com/okonet/lint-staged#Configuration" target="_blank" rel="noreferrer">lint-staged配置</a></p><p>可以在根目录创建 <code>.lintstagedrc.json</code>文件控制检查和操作方式</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;*.{js,jsx,ts,tsx}&quot;: [&quot;prettier --write&quot;, &quot;eslint  --fix&quot;],</span></span>
<span class="line"><span>    &quot;*.{css,json,md,less,scss}&quot;: [&quot;prettier --write&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>也可以在<code>package.json</code>中配置：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;lint-staged&quot;: {</span></span>
<span class="line"><span>      &quot;*.{js,jsx,ts,tsx}&quot;: [&quot;prettier --write&quot;, &quot;eslint  --fix&quot;],</span></span>
<span class="line"><span>      &quot;*.{css,json,md,less,scss}&quot;: [&quot;prettier --write&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_2-3-3-commitlint" tabindex="-1">2.3.3 commitlint <a class="header-anchor" href="#_2-3-3-commitlint" aria-label="Permalink to &quot;2.3.3 commitlint&quot;">​</a></h6><p><a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">官网</a></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D commitlint</span></span>
<span class="line"><span>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span></span></code></pre></div><p>添加配置文件<code>commitlint.config.js</code>：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// commitlint.config.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** @type {import(&#39;cz-git&#39;).UserConfig} */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">module.exports = {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // @see: https://commitlint.js.org/#/reference-rules</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 配置规则：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //     每个配置是一个个键值对，键值是array类型：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //         第一个参数表示：重要等级，0表示关闭规则，1表示warning，2表示error</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //         第二个参数表示：应用与否，always | nerver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //         第三个参数表示：配置规则的值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // commit message的结构如下：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //     &lt;type&gt;[optional scope]: &lt;description&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //     [optional body]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //     [optional footer(s)]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 简短描述(subject)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 详细描述(body)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;body-leading-blank&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// body开头空行</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;body-max-line-length&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// body最大内容长度</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;footer-leading-blank&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// footer开头空行</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;footer-max-line-length&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// footer最大内容长度</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;header-max-length&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// header最大长度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // subject单词格式</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;subject-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            &#39;never&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            [</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;sentence-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;start-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;pascal-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;upper-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;subject-empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;never&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// subject是否为空</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;subject-full-stop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;never&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// subject中止符</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;type-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;lower-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// type单词格式</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;type-empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;never&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// type是否为空</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // type可选值</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        &#39;type-enum&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            &#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            [</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;release&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;build&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;update&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;docs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;perf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;refactor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;revert&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                &#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;docs:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :memo:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 文档更新&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            uv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;release:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :bookmark:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> update</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> version&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;选择你要提交的类型</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            scope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;选择一个提交范围（可选）:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            customScope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;请输入自定义的提交范围</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            subject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;填写简短精炼的变更描述</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :\\n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;填写更加详细的变更描述（可选）。使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;|&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 换行</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :\\n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            breaking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;列举非兼容性重大的变更（可选）。使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;|&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 换行</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :\\n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            footerPrefixsSelect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;选择关联issue前缀（可选）:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            customFooterPrefixs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;输入自定义issue前缀</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;列举关联issue</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> (可选)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 例如:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#I3244</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">\\n&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            confirmCommit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;是否提交或修改commit</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;add:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ✨</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  新增功能&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:sparkles:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;update&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;update:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   🚀</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  更新&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:rocket:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;fix:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      🐛</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  修复缺陷&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:bug:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;release&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;release:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  🔖</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  发布新版本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:bookmark:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;style:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    💄</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  代码格式</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> (不影响功能，例如空格、分号等格式修正）&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:lipstick:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;refactor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;refactor:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ♻️</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   代码重构</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> （不包括</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> bug</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 修复、功能新增）&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:recycle:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;perf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;perf:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     ⚡️</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  性能优化&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:zap:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;test:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     ✅</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  添加疏漏测试或已有测试改动&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:white_check_mark:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;build&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;build:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    📦️</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  构建相关</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> （构建流程、外部依赖变更（如升级</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> npm</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 包、修改</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> webpack</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 配置等）&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:package:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;docs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;docs:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     📝</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  文档更新&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:memo:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;revert&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;revert:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   ⏪️</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  回滚</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> commit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;:rewind:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        useEmoji</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否开启 commit message 带有 Emoji 字符。</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        emojiAlign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;center&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 Emoji 字符 的 位于头部位置</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        themeColorCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置提示查询器主题颜色, cyan青色</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        scopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义选择 模块范围 命令行显示信息</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        allowCustomScopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否在选择 模块范围 显示自定义选项(custom)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        allowEmptyScopes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否在选择 模块范围 显示为空选项(empty)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        customScopesAlign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;bottom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 选择范围 中 为空选项(empty) 和 自定义选项(custom) 的 位置</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        customScopesAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;custom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义 选择范围 中 自定义选项(custom) 在命令行中显示的 名称</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        emptyScopesAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义 选择范围 中 为空选项(empty) 在命令行中显示的 名称</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        upperCaseSubject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否自动将简短描述(subject)第一个字符进行大写处理</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        markBreakingChangeMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加额外的问题重大变更(BREAKING CHANGES)提问，询问是否需要添加 &quot;!&quot; 标识于</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        allowBreakingChanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;feat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 允许出现 重大变更(BREAKING CHANGES)的特定 type</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        breaklineNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 详细描述(body)和重大变更(BREAKING CHANGES)中根据字符超过该数值自动换行</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        breaklineChar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;|&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        skipQuestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;scope&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;body&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;breaking&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;footerPrefix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;footer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义选择指定的问题不显示</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 自定义选择issue前缀</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        issuePrefixs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 如果使用 gitee 作为开发管理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;link&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;link:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     链接</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ISSUES</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 进行中&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;closed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;closed:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   标记</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ISSUES</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 已完成&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        customIssuePrefixsAlign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;top&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 选择 issue 前缀 中 跳过选项(skip) 和 自定义选项(custom) 的 位置</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        emptyIssuePrefixsAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;skip&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义 选择 issue 前缀 中 跳过选项(skip) 在命令行中显示的 名称</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        customIssuePrefixsAlias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;custom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义 选择 issue 前缀 中 自定义选项(custom) 在命令行中显示的 名称</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        allowCustomIssuePrefixs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否在选择 ISSUE 前缀 显示自定义选项(custom)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        allowEmptyIssuePrefixs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否在选择 ISSUE 前缀 显示为跳过选项(skip)</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        confirmColorize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 确定提交中模板 commit message 是否着色</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        maxHeaderLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义commit message中的 header 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        maxSubjectLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义commit message中的 subject 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        minSubjectLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义commit message中的 subject 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        scopeOverrides</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 自定义选择了特定类型后 覆盖模块范围 命令行显示信息</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        defaultBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 详细描述 中是否使用显示默认值</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        defaultIssues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 输入ISSUE 中是否使用显示默认值</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        defaultScope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果 defaultScope 与在选择范围列表项中的 value 相匹配就会进行星标置顶操作。</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        defaultSubject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 简短描述 中是否使用显示默认值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>release</td><td>发布新版</td></tr><tr><td>build</td><td>编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td></tr><tr><td>update</td><td>更新</td></tr><tr><td>docs</td><td>文档修改</td></tr><tr><td>add</td><td>新特性、新功能</td></tr><tr><td>fix</td><td>修改bug</td></tr><tr><td>perf</td><td>优化相关，比如提升性能、体验</td></tr><tr><td>refactor</td><td>代码重构</td></tr><tr><td>revert</td><td>回滚到上一个版本</td></tr><tr><td>style</td><td>代码格式修改, 注意不是 css 修改</td></tr><tr><td>test</td><td>测试用例修改</td></tr></tbody></table><h6 id="_2-3-4-commitizen" tabindex="-1">2.3.4 commitizen <a class="header-anchor" href="#_2-3-4-commitizen" aria-label="Permalink to &quot;2.3.4 commitizen&quot;">​</a></h6><p>什么是commitizen：基于Node.js的 <code>git commit</code> 命令行工具，辅助生成标准化规范化的 commit message。</p><p>什么是适配器：适配器是为commitizen提供提示性交互的工具，提问功能就是适配器里面的</p><p><strong>注意：要使用cz命令，必须全局安装commitizen</strong></p><p><strong>注意：要使用cz命令，必须全局安装commitizen</strong></p><p><strong>注意：要使用cz命令，必须全局安装commitizen</strong></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -g commitizen</span></span></code></pre></div><p><strong>方式一:</strong> 在 <strong>package.json</strong> 下 config.commitizen 下添加自定义配置，但过量的配置项会导致 package.json 臃肿，不介绍了。</p><p><strong>方式二: (推荐) 使用适配器</strong></p><p>与 <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a> 进行联动给予校验信息**，所以可以编写于 <a href="https://github.com/conventional-changelog/commitlint#config" target="_blank" rel="noreferrer">commitlint</a> 配置文件之中。例如: (<a href="https://cz-git.qbb.sh/zh/config/" target="_blank" rel="noreferrer">⇒ 配置模板</a>)</p><p>cz-git适配器的效果挺好的，我们由于有特殊的提问需求，于是没采用cz-git适配器，但是在我们自己的适配器里面，实现了类似的功能。</p><p>在<code>commitlint.config.js</code>中添加prompt对象：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// commitlint.config.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    prompt: {</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            fd: &#39;docs: :memo: 文档更新&#39;,</span></span>
<span class="line"><span>            uv: &#39;release: :bookmark: update version&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        messages: {</span></span>
<span class="line"><span>            type: &#39;选择你要提交的类型 :&#39;,</span></span>
<span class="line"><span>            scope: &#39;选择一个提交范围（可选）:&#39;,</span></span>
<span class="line"><span>            customScope: &#39;请输入自定义的提交范围 :&#39;,</span></span>
<span class="line"><span>            subject: &#39;填写简短精炼的变更描述 :\\n&#39;,</span></span>
<span class="line"><span>            body: &#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line"><span>            breaking: &#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,</span></span>
<span class="line"><span>            footerPrefixsSelect: &#39;选择关联issue前缀（可选）:&#39;,</span></span>
<span class="line"><span>            customFooterPrefixs: &#39;输入自定义issue前缀 :&#39;,</span></span>
<span class="line"><span>            footer: &#39;列举关联issue (可选) 例如: #31, #I3244 :\\n&#39;,</span></span>
<span class="line"><span>            confirmCommit: &#39;是否提交或修改commit ?&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        types: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;add&#39;,</span></span>
<span class="line"><span>                name: &#39;add:      ✨  新增功能&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:sparkles:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;update&#39;,</span></span>
<span class="line"><span>                name: &#39;update:   🚀  更新&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:rocket:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;fix&#39;,</span></span>
<span class="line"><span>                name: &#39;fix:      🐛  修复缺陷&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:bug:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;release&#39;,</span></span>
<span class="line"><span>                name: &#39;release:  🔖  发布新版本&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:bookmark:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;style&#39;,</span></span>
<span class="line"><span>                name: &#39;style:    💄  代码格式 (不影响功能，例如空格、分号等格式修正）&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:lipstick:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;refactor&#39;,</span></span>
<span class="line"><span>                name: &#39;refactor: ♻️   代码重构 （不包括 bug 修复、功能新增）&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:recycle:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;perf&#39;,</span></span>
<span class="line"><span>                name: &#39;perf:     ⚡️  性能优化&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:zap:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;test&#39;,</span></span>
<span class="line"><span>                name: &#39;test:     ✅  添加疏漏测试或已有测试改动&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:white_check_mark:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;build&#39;,</span></span>
<span class="line"><span>                name: &#39;build:    📦️  构建相关 （构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:package:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;docs&#39;,</span></span>
<span class="line"><span>                name: &#39;docs:     📝  文档更新&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:memo:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                value: &#39;revert&#39;,</span></span>
<span class="line"><span>                name: &#39;revert:   ⏪️  回滚 commit&#39;,</span></span>
<span class="line"><span>                emoji: &#39;:rewind:&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        useEmoji: true, // 是否开启 commit message 带有 Emoji 字符。</span></span>
<span class="line"><span>        emojiAlign: &#39;center&#39;, // 设置 Emoji 字符 的 位于头部位置</span></span>
<span class="line"><span>        themeColorCode: &#39;&#39;, // 设置提示查询器主题颜色, cyan青色</span></span>
<span class="line"><span>        scopes: [], // 自定义选择 模块范围 命令行显示信息</span></span>
<span class="line"><span>        allowCustomScopes: true, // 是否在选择 模块范围 显示自定义选项(custom)</span></span>
<span class="line"><span>        allowEmptyScopes: true, // 是否在选择 模块范围 显示为空选项(empty)</span></span>
<span class="line"><span>        customScopesAlign: &#39;bottom&#39;, // 设置 选择范围 中 为空选项(empty) 和 自定义选项(custom) 的 位置</span></span>
<span class="line"><span>        customScopesAlias: &#39;custom&#39;, // 自定义 选择范围 中 自定义选项(custom) 在命令行中显示的 名称</span></span>
<span class="line"><span>        emptyScopesAlias: &#39;empty&#39;, // 自定义 选择范围 中 为空选项(empty) 在命令行中显示的 名称</span></span>
<span class="line"><span>        upperCaseSubject: false, // 是否自动将简短描述(subject)第一个字符进行大写处理</span></span>
<span class="line"><span>        markBreakingChangeMode: false, // 添加额外的问题重大变更(BREAKING CHANGES)提问，询问是否需要添加 &quot;!&quot; 标识于</span></span>
<span class="line"><span>        allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;], // 允许出现 重大变更(BREAKING CHANGES)的特定 type</span></span>
<span class="line"><span>        breaklineNumber: 100, // 详细描述(body)和重大变更(BREAKING CHANGES)中根据字符超过该数值自动换行</span></span>
<span class="line"><span>        breaklineChar: &#39;|&#39;, // 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符</span></span>
<span class="line"><span>        skipQuestions: [&#39;scope&#39;, &#39;body&#39;, &#39;breaking&#39;, &#39;footerPrefix&#39;, &#39;footer&#39;], // 自定义选择指定的问题不显示</span></span>
<span class="line"><span>        // 自定义选择issue前缀</span></span>
<span class="line"><span>        issuePrefixs: [</span></span>
<span class="line"><span>            // 如果使用 gitee 作为开发管理</span></span>
<span class="line"><span>            { value: &#39;link&#39;, name: &#39;link:     链接 ISSUES 进行中&#39; },</span></span>
<span class="line"><span>            { value: &#39;closed&#39;, name: &#39;closed:   标记 ISSUES 已完成&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        customIssuePrefixsAlign: &#39;top&#39;, // 设置 选择 issue 前缀 中 跳过选项(skip) 和 自定义选项(custom) 的 位置</span></span>
<span class="line"><span>        emptyIssuePrefixsAlias: &#39;skip&#39;, // 自定义 选择 issue 前缀 中 跳过选项(skip) 在命令行中显示的 名称</span></span>
<span class="line"><span>        customIssuePrefixsAlias: &#39;custom&#39;, // 自定义 选择 issue 前缀 中 自定义选项(custom) 在命令行中显示的 名称</span></span>
<span class="line"><span>        allowCustomIssuePrefixs: true, // 是否在选择 ISSUE 前缀 显示自定义选项(custom)</span></span>
<span class="line"><span>        allowEmptyIssuePrefixs: true, // 是否在选择 ISSUE 前缀 显示为跳过选项(skip)</span></span>
<span class="line"><span>        confirmColorize: true, // 确定提交中模板 commit message 是否着色</span></span>
<span class="line"><span>        maxHeaderLength: Infinity, // 定义commit message中的 header 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span>        maxSubjectLength: Infinity, // 定义commit message中的 subject 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span>        minSubjectLength: 0, // 定义commit message中的 subject 长度, 给予在命令行中的校验信息</span></span>
<span class="line"><span>        scopeOverrides: undefined, // 自定义选择了特定类型后 覆盖模块范围 命令行显示信息</span></span>
<span class="line"><span>        defaultBody: &#39;&#39;, // 在 详细描述 中是否使用显示默认值</span></span>
<span class="line"><span>        defaultIssues: &#39;&#39;, // 在 输入ISSUE 中是否使用显示默认值</span></span>
<span class="line"><span>        defaultScope: &#39;&#39;, // 如果 defaultScope 与在选择范围列表项中的 value 相匹配就会进行星标置顶操作。</span></span>
<span class="line"><span>        defaultSubject: &#39;&#39;, // 在 简短描述 中是否使用显示默认值</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_2-3-5-编写adaptor" tabindex="-1">2.3.5 编写adaptor <a class="header-anchor" href="#_2-3-5-编写adaptor" aria-label="Permalink to &quot;2.3.5 编写adaptor&quot;">​</a></h6><p>参考：<a href="https://github.com/Zhengqbbb/cz-git" target="_blank" rel="noreferrer">cz-git</a>、<a href="https://github.com/commitizen" target="_blank" rel="noreferrer">commitizen</a>/<a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noreferrer">cz-cli</a>、<a href="https://github.com/leoforfree/cz-customizable" target="_blank" rel="noreferrer">cz-customizable</a>、<a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noreferrer">Inquirer.js</a></p><p>修改整合了<code>cz-customizable</code>的代码：</p><p>先安装依赖：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn add -D editor temp word-wrap find-config</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cz_customizable.js</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// cz_customizable.js</span></span>
<span class="line"><span>// 依赖：editor temp word-wrap lodash find-config</span></span>
<span class="line"><span>// yarn add -D editor temp word-wrap lodash find-config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* eslint-disable global-require */</span></span>
<span class="line"><span>// Inspired by: https://github.com/commitizen/cz-conventional-changelog and https://github.com/commitizen/cz-cli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const editor = require(&#39;editor&#39;)</span></span>
<span class="line"><span>const temp = require(&#39;temp&#39;).track()</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>const _ = require(&#39;lodash&#39;)</span></span>
<span class="line"><span>const wrap = require(&#39;word-wrap&#39;)</span></span>
<span class="line"><span>const findConfig = require(&#39;find-config&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const log = console</span></span>
<span class="line"><span>const readConfigFile = (CZ_CONFIG_NAME = &#39;commitlint.config.js&#39;) =&gt; {</span></span>
<span class="line"><span>    // First try to find the .cz-config.js config file</span></span>
<span class="line"><span>    // It seems like find-config still locates config files in the home directory despite of the home:false prop.</span></span>
<span class="line"><span>    const czConfig = findConfig.require(CZ_CONFIG_NAME, { home: false })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (czConfig?.prompt) {</span></span>
<span class="line"><span>        return czConfig.prompt</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // fallback to locating it using the config block in the nearest package.json</span></span>
<span class="line"><span>    let pkg = findConfig(&#39;package.json&#39;, { home: false })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pkg) {</span></span>
<span class="line"><span>        const pkgDir = path.dirname(pkg)</span></span>
<span class="line"><span>        pkg = require(pkg)</span></span>
<span class="line"><span>        if (</span></span>
<span class="line"><span>            pkg.config &amp;&amp;</span></span>
<span class="line"><span>            pkg.config[&#39;cz-customizable&#39;] &amp;&amp;</span></span>
<span class="line"><span>            pkg.config[&#39;cz-customizable&#39;].config</span></span>
<span class="line"><span>        ) {</span></span>
<span class="line"><span>            // resolve relative to discovered package.json</span></span>
<span class="line"><span>            const pkgPath = path.resolve(</span></span>
<span class="line"><span>                pkgDir,</span></span>
<span class="line"><span>                pkg.config[&#39;cz-customizable&#39;].config</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            log.info(</span></span>
<span class="line"><span>                &#39;&gt;&gt;&gt; Using cz-customizable config specified in your package.json: &#39;,</span></span>
<span class="line"><span>                pkgPath</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            return require(pkgPath)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* istanbul ignore next */</span></span>
<span class="line"><span>    log.error(</span></span>
<span class="line"><span>        &#39;Unable to find a configuration file. Please refer to documentation to learn how to set up: https://github.com/leonardoanalista/cz-customizable#steps &quot;&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    return null</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const defaultSubjectSeparator = &#39;: &#39;</span></span>
<span class="line"><span>const defaultMaxLineWidth = 100</span></span>
<span class="line"><span>const defaultBreaklineChar = &#39;|&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const isNotWip = (answers) =&gt; answers.type.toLowerCase() !== &#39;wip&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const isValidateTicketNo = (value, config) =&gt; {</span></span>
<span class="line"><span>    if (!value) {</span></span>
<span class="line"><span>        return !config.isTicketNumberRequired</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!config.ticketNumberRegExp) {</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const reg = new RegExp(config.ticketNumberRegExp)</span></span>
<span class="line"><span>    if (value.replace(reg, &#39;&#39;) !== &#39;&#39;) {</span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getPreparedCommit = (context) =&gt; {</span></span>
<span class="line"><span>    let message = null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // eslint-disable-next-line no-undef</span></span>
<span class="line"><span>    let preparedCommit = getPreviousCommit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (preparedCommit) {</span></span>
<span class="line"><span>        preparedCommit = preparedCommit</span></span>
<span class="line"><span>            .replace(/^#.*/gm, &#39;&#39;)</span></span>
<span class="line"><span>            .replace(/^\\s*[\\r\\n]/gm, &#39;&#39;)</span></span>
<span class="line"><span>            .replace(/[\\r\\n]$/, &#39;&#39;)</span></span>
<span class="line"><span>            .split(/\\r\\n|\\r|\\n/)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (preparedCommit.length &amp;&amp; preparedCommit[0]) {</span></span>
<span class="line"><span>            if (context === &#39;subject&#39;) [message] = preparedCommit</span></span>
<span class="line"><span>            else if (context === &#39;body&#39; &amp;&amp; preparedCommit.length &gt; 1) {</span></span>
<span class="line"><span>                preparedCommit.shift()</span></span>
<span class="line"><span>                message = preparedCommit.join(&#39;|&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return message</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const addTicketNumber = (ticketNumber, config) =&gt; {</span></span>
<span class="line"><span>    if (!ticketNumber) {</span></span>
<span class="line"><span>        return &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (config.ticketNumberPrefix) {</span></span>
<span class="line"><span>        return \`\${config.ticketNumberPrefix + ticketNumber.trim()} \`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return \`\${ticketNumber.trim()} \`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addScope = (scope, config) =&gt; {</span></span>
<span class="line"><span>    const separator = _.get(config, &#39;subjectSeparator&#39;, defaultSubjectSeparator)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (!scope) return separator // it could be type === WIP. So there is no scope</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return \`(\${scope.trim()})\${separator}\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addSubject = (subject) =&gt; _.trim(subject)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addType = (type, config) =&gt; {</span></span>
<span class="line"><span>    const prefix = _.get(config, &#39;typePrefix&#39;, &#39;&#39;)</span></span>
<span class="line"><span>    const suffix = _.get(config, &#39;typeSuffix&#39;, &#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return _.trim(\`\${prefix}\${type}\${suffix}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addBreaklinesIfNeeded = (value, breaklineChar = defaultBreaklineChar) =&gt;</span></span>
<span class="line"><span>    value.split(breaklineChar).join(&#39;\\n&#39;).valueOf()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const escapeSpecialChars = (result) =&gt; {</span></span>
<span class="line"><span>    const specialChars = [&#39;\`&#39;, &#39;&quot;&#39;, &#39;\\\\$&#39;, &#39;!&#39;, &#39;&lt;&#39;, &#39;&gt;&#39;, &#39;&amp;&#39;]</span></span>
<span class="line"><span>    let newResult = result</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    specialChars.forEach((item) =&gt; {</span></span>
<span class="line"><span>        // If user types \`feat: &quot;string&quot;\`, the commit preview should show \`feat: \\&quot;string\\&quot;\`.</span></span>
<span class="line"><span>        // Don&#39;t worry. The git log will be \`feat: &quot;string&quot;\`</span></span>
<span class="line"><span>        newResult = newResult.replace(new RegExp(item, &#39;g&#39;), \`\\\\\${item}\`)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return newResult</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const addFooter = (footer, config) =&gt; {</span></span>
<span class="line"><span>    if (config &amp;&amp; config.footerPrefix === &#39;&#39;) return \`\\n\\n\${footer}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const footerPrefix =</span></span>
<span class="line"><span>        config &amp;&amp; config.footerPrefix ? config.footerPrefix : &#39;ISSUES CLOSED:&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return \`\\n\\n\${footerPrefix} \${addBreaklinesIfNeeded(</span></span>
<span class="line"><span>        footer,</span></span>
<span class="line"><span>        config.breaklineChar</span></span>
<span class="line"><span>    )}\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const buildCommit = (answers, config, emoji) =&gt; {</span></span>
<span class="line"><span>    const wrapOptions = {</span></span>
<span class="line"><span>        trim: true,</span></span>
<span class="line"><span>        newline: &#39;\\n&#39;,</span></span>
<span class="line"><span>        indent: &#39;&#39;,</span></span>
<span class="line"><span>        width: defaultMaxLineWidth,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Hard limit this line</span></span>
<span class="line"><span>    // eslint-disable-next-line max-len</span></span>
<span class="line"><span>    const head =</span></span>
<span class="line"><span>        addType(answers.type, config) +</span></span>
<span class="line"><span>        addScope(answers.scope, config) +</span></span>
<span class="line"><span>        addTicketNumber(answers.ticketNumber, config) +</span></span>
<span class="line"><span>        \` \${emoji} \` +</span></span>
<span class="line"><span>        addSubject(answers.subject.slice(0, config.subjectLimit))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Wrap these lines at 100 characters</span></span>
<span class="line"><span>    let body = wrap(answers.body, wrapOptions) || &#39;&#39;</span></span>
<span class="line"><span>    body = addBreaklinesIfNeeded(body, config.breaklineChar)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const breaking = wrap(answers.breaking, wrapOptions)</span></span>
<span class="line"><span>    const footer = wrap(answers.footer, wrapOptions)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let result = head</span></span>
<span class="line"><span>    if (body) {</span></span>
<span class="line"><span>        result += \`\\n\\n\${body}\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (breaking) {</span></span>
<span class="line"><span>        const breakingPrefix =</span></span>
<span class="line"><span>            config &amp;&amp; config.breakingPrefix</span></span>
<span class="line"><span>                ? config.breakingPrefix</span></span>
<span class="line"><span>                : &#39;BREAKING CHANGE:&#39;</span></span>
<span class="line"><span>        result += \`\\n\\n\${breakingPrefix}\\n\${breaking}\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (footer) {</span></span>
<span class="line"><span>        result += addFooter(footer, config)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return escapeSpecialChars(result)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const myQuestions = {</span></span>
<span class="line"><span>    getQuestions(config, cz) {</span></span>
<span class="line"><span>        // normalize config optional options</span></span>
<span class="line"><span>        const scopeOverrides = config.scopeOverrides || {}</span></span>
<span class="line"><span>        const messages = config.messages || {}</span></span>
<span class="line"><span>        const skipQuestions = config.skipQuestions || []</span></span>
<span class="line"><span>        const skipEmptyScopes = config.skipEmptyScopes || false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        messages.type =</span></span>
<span class="line"><span>            messages.type || &quot;Select the type of change that you&#39;re committing:&quot;</span></span>
<span class="line"><span>        messages.scope =</span></span>
<span class="line"><span>            messages.scope || &#39;\\nDenote the SCOPE of this change (optional):&#39;</span></span>
<span class="line"><span>        messages.customScope =</span></span>
<span class="line"><span>            messages.customScope || &#39;Denote the SCOPE of this change:&#39;</span></span>
<span class="line"><span>        if (!messages.ticketNumber) {</span></span>
<span class="line"><span>            if (config.ticketNumberRegExp) {</span></span>
<span class="line"><span>                messages.ticketNumber =</span></span>
<span class="line"><span>                    messages.ticketNumberPattern ||</span></span>
<span class="line"><span>                    \`Enter the ticket number following this pattern (\${config.ticketNumberRegExp})\\n\`</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                messages.ticketNumber = &#39;Enter the ticket number:\\n&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        messages.subject =</span></span>
<span class="line"><span>            messages.subject ||</span></span>
<span class="line"><span>            &#39;Write a SHORT, IMPERATIVE tense description of the change:\\n&#39;</span></span>
<span class="line"><span>        messages.body =</span></span>
<span class="line"><span>            messages.body ||</span></span>
<span class="line"><span>            &#39;Provide a LONGER description of the change (optional). Use &quot;|&quot; to break new line:\\n&#39;</span></span>
<span class="line"><span>        messages.breaking =</span></span>
<span class="line"><span>            messages.breaking || &#39;List any BREAKING CHANGES (optional):\\n&#39;</span></span>
<span class="line"><span>        messages.footer =</span></span>
<span class="line"><span>            messages.footer ||</span></span>
<span class="line"><span>            &#39;List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\\n&#39;</span></span>
<span class="line"><span>        messages.confirmCommit =</span></span>
<span class="line"><span>            messages.confirmCommit ||</span></span>
<span class="line"><span>            &#39;Are you sure you want to proceed with the commit above?&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let questions = [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;list&#39;,</span></span>
<span class="line"><span>                name: &#39;type&#39;,</span></span>
<span class="line"><span>                message: messages.type,</span></span>
<span class="line"><span>                choices: config.types,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;list&#39;,</span></span>
<span class="line"><span>                name: &#39;scope&#39;,</span></span>
<span class="line"><span>                message: messages.scope,</span></span>
<span class="line"><span>                choices(answers) {</span></span>
<span class="line"><span>                    let scopes = []</span></span>
<span class="line"><span>                    if (scopeOverrides[answers.type]) {</span></span>
<span class="line"><span>                        scopes = scopes.concat(scopeOverrides[answers.type])</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        scopes = scopes.concat(config.scopes)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    if (config.allowCustomScopes || scopes.length === 0) {</span></span>
<span class="line"><span>                        scopes = scopes.concat([</span></span>
<span class="line"><span>                            new cz.Separator(),</span></span>
<span class="line"><span>                            { name: &#39;empty&#39;, value: false },</span></span>
<span class="line"><span>                            { name: &#39;custom&#39;, value: &#39;custom&#39; },</span></span>
<span class="line"><span>                        ])</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return scopes</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                when(answers) {</span></span>
<span class="line"><span>                    let hasScope = false</span></span>
<span class="line"><span>                    if (scopeOverrides[answers.type]) {</span></span>
<span class="line"><span>                        hasScope = !!(scopeOverrides[answers.type].length &gt; 0)</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        hasScope = !!(config.scopes &amp;&amp; config.scopes.length &gt; 0)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    if (!hasScope) {</span></span>
<span class="line"><span>                        // TODO: Fix when possible</span></span>
<span class="line"><span>                        // eslint-disable-next-line no-param-reassign</span></span>
<span class="line"><span>                        answers.scope = skipEmptyScopes ? &#39;&#39; : &#39;custom&#39;</span></span>
<span class="line"><span>                        return false</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return isNotWip(answers)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;scope&#39;,</span></span>
<span class="line"><span>                message: messages.customScope,</span></span>
<span class="line"><span>                when(answers) {</span></span>
<span class="line"><span>                    return answers.scope === &#39;custom&#39;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;ticketNumber&#39;,</span></span>
<span class="line"><span>                message: messages.ticketNumber,</span></span>
<span class="line"><span>                when() {</span></span>
<span class="line"><span>                    return !!config.allowTicketNumber // no ticket numbers allowed unless specifed</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                validate(value) {</span></span>
<span class="line"><span>                    return isValidateTicketNo(value, config)</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;subject&#39;,</span></span>
<span class="line"><span>                message: messages.subject,</span></span>
<span class="line"><span>                default:</span></span>
<span class="line"><span>                    config.usePreparedCommit &amp;&amp; getPreparedCommit(&#39;subject&#39;),</span></span>
<span class="line"><span>                validate(value) {</span></span>
<span class="line"><span>                    if (value.length == 0) return &#39;描述不能为空&#39;</span></span>
<span class="line"><span>                    const limit = config.subjectLimit || 100</span></span>
<span class="line"><span>                    if (value.length &gt; limit) {</span></span>
<span class="line"><span>                        return \`Exceed limit: \${limit}\`</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return true</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                filter(value) {</span></span>
<span class="line"><span>                    const upperCaseSubject = config.upperCaseSubject || false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    return (</span></span>
<span class="line"><span>                        (upperCaseSubject</span></span>
<span class="line"><span>                            ? value.charAt(0).toUpperCase()</span></span>
<span class="line"><span>                            : value.charAt(0).toLowerCase()) + value.slice(1)</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;body&#39;,</span></span>
<span class="line"><span>                message: messages.body,</span></span>
<span class="line"><span>                default: config.usePreparedCommit &amp;&amp; getPreparedCommit(&#39;body&#39;),</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;breaking&#39;,</span></span>
<span class="line"><span>                message: messages.breaking,</span></span>
<span class="line"><span>                when(answers) {</span></span>
<span class="line"><span>                    // eslint-disable-next-line max-len</span></span>
<span class="line"><span>                    if (</span></span>
<span class="line"><span>                        config.askForBreakingChangeFirst ||</span></span>
<span class="line"><span>                        (config.allowBreakingChanges &amp;&amp;</span></span>
<span class="line"><span>                            config.allowBreakingChanges.indexOf(</span></span>
<span class="line"><span>                                answers.type.toLowerCase()</span></span>
<span class="line"><span>                            ) &gt;= 0)</span></span>
<span class="line"><span>                    ) {</span></span>
<span class="line"><span>                        return true</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return false // no breaking changes allowed unless specifed</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;input&#39;,</span></span>
<span class="line"><span>                name: &#39;footer&#39;,</span></span>
<span class="line"><span>                message: messages.footer,</span></span>
<span class="line"><span>                when: isNotWip,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;list&#39;,</span></span>
<span class="line"><span>                name: &#39;release&#39;,</span></span>
<span class="line"><span>                message: messages.release,</span></span>
<span class="line"><span>                choices: [</span></span>
<span class="line"><span>                    { key: &#39;n&#39;, name: &#39;No&#39;, value: &#39;no&#39; },</span></span>
<span class="line"><span>                    { key: &#39;y&#39;, name: &#39;Yes&#39;, value: &#39;yes&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                type: &#39;expand&#39;,</span></span>
<span class="line"><span>                name: &#39;confirmCommit&#39;,</span></span>
<span class="line"><span>                choices: [</span></span>
<span class="line"><span>                    { key: &#39;y&#39;, name: &#39;确认&#39;, value: &#39;yes&#39; },</span></span>
<span class="line"><span>                    { key: &#39;n&#39;, name: &#39;中断提交&#39;, value: &#39;no&#39; },</span></span>
<span class="line"><span>                    { key: &#39;e&#39;, name: &#39;编辑提交信息&#39;, value: &#39;edit&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                default: 0,</span></span>
<span class="line"><span>                message(answers) {</span></span>
<span class="line"><span>                    let emoji = config.types.find((e) =&gt; {</span></span>
<span class="line"><span>                        return answers.type === e.value</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    if (emoji === undefined) {</span></span>
<span class="line"><span>                        emoji = &#39;&#39;</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        emoji = emoji.emoji</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    const SEP =</span></span>
<span class="line"><span>                        &#39;###--------------------------------------------------------###&#39;</span></span>
<span class="line"><span>                    log.info(</span></span>
<span class="line"><span>                        \`\\n\${SEP}\\n\${buildCommit(answers, config, emoji)}\${answers.release === &#39;yes&#39; ? &#39;  #release#&#39; : &#39;&#39;</span></span>
<span class="line"><span>                        }\\n\${SEP}\\n\`</span></span>
<span class="line"><span>                    )</span></span>
<span class="line"><span>                    return messages.confirmCommit</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        questions = questions.filter(</span></span>
<span class="line"><span>            (item) =&gt; !skipQuestions.includes(item.name)</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (config.askForBreakingChangeFirst) {</span></span>
<span class="line"><span>            const isBreaking = (oneQuestion) =&gt; oneQuestion.name === &#39;breaking&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const breakingQuestion = _.filter(questions, isBreaking)</span></span>
<span class="line"><span>            const questionWithoutBreaking = _.reject(questions, isBreaking)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            questions = _.concat(breakingQuestion, questionWithoutBreaking)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return questions</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    prompter(cz, commit) {</span></span>
<span class="line"><span>        const config = readConfigFile()</span></span>
<span class="line"><span>        config.subjectLimit = config.subjectLimit || 100</span></span>
<span class="line"><span>        log.info(&#39;除了首行，所有行将在100个字符位置折叠。&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const questions = myQuestions.getQuestions(config, cz)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        cz.prompt(questions).then((answers) =&gt; {</span></span>
<span class="line"><span>            if (answers.release === &#39;yes&#39;) {</span></span>
<span class="line"><span>                // eslint-disable-next-line no-param-reassign</span></span>
<span class="line"><span>                answers.subject += &#39;#release#&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            let emoji = config.types.find((e) =&gt; {</span></span>
<span class="line"><span>                return answers.type === e.value</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            if (emoji === undefined) {</span></span>
<span class="line"><span>                emoji = &#39;&#39;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                emoji = emoji.emoji</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (answers.confirmCommit === &#39;edit&#39;) {</span></span>
<span class="line"><span>                temp.open(null, (err, info) =&gt; {</span></span>
<span class="line"><span>                    /* istanbul ignore else */</span></span>
<span class="line"><span>                    if (!err) {</span></span>
<span class="line"><span>                        fs.writeSync(</span></span>
<span class="line"><span>                            info.fd,</span></span>
<span class="line"><span>                            buildCommit(answers, config, emoji)</span></span>
<span class="line"><span>                        )</span></span>
<span class="line"><span>                        fs.close(info.fd, () =&gt; {</span></span>
<span class="line"><span>                            editor(info.path, (code) =&gt; {</span></span>
<span class="line"><span>                                if (code === 0) {</span></span>
<span class="line"><span>                                    const commitStr = fs.readFileSync(</span></span>
<span class="line"><span>                                        info.path,</span></span>
<span class="line"><span>                                        {</span></span>
<span class="line"><span>                                            encoding: &#39;utf8&#39;,</span></span>
<span class="line"><span>                                        }</span></span>
<span class="line"><span>                                    )</span></span>
<span class="line"><span>                                    commit(commitStr)</span></span>
<span class="line"><span>                                } else {</span></span>
<span class="line"><span>                                    log.info(</span></span>
<span class="line"><span>                                        \`你的Commit信息是：\\n\${buildCommit(</span></span>
<span class="line"><span>                                            answers,</span></span>
<span class="line"><span>                                            config,</span></span>
<span class="line"><span>                                            emoji</span></span>
<span class="line"><span>                                        )}\`</span></span>
<span class="line"><span>                                    )</span></span>
<span class="line"><span>                                }</span></span>
<span class="line"><span>                            })</span></span>
<span class="line"><span>                        })</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            } else if (answers.confirmCommit === &#39;yes&#39;) {</span></span>
<span class="line"><span>                commit(buildCommit(answers, config, emoji))</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                log.info(&#39;已经取消Commit。&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="_2-4-git换行符问题" tabindex="-1">2.4 git换行符问题 <a class="header-anchor" href="#_2-4-git换行符问题" aria-label="Permalink to &quot;2.4 git换行符问题&quot;">​</a></h5><h6 id="_2-4-1-知识背景" tabindex="-1">2.4.1 知识背景 <a class="header-anchor" href="#_2-4-1-知识背景" aria-label="Permalink to &quot;2.4.1 知识背景&quot;">​</a></h6><p>LF和CRLF都是换行符，在各操作系统下，换行符是不一样的，Linux/UNIX下是LF,而Windows下是CRLF，早期的MAC OS是CR,后来的OS X在更换内核后和UNIX一样也是LF。</p><p>Git 由大名鼎鼎的 Linus 开发，最初只可运行于 UNIX系统，因此推荐只将 UNIX 风格的换行符保存入库。但它也考虑到了跨平台协作的场景，并且提供了一个“换行符自动转换”功能。</p><p>为了避免出现<code>CRLF</code>和<code>LF</code>混合的情况，可以选择配置<code>“.gitattribute”</code>文件来管理 Git 读取特定存储库中的行结束符的方式。 将此文件提交到存储库时，它将覆盖所有存储库贡献者的 <code>core.autocrlf</code> 设置。 这可确保所有用户的行为一致，而不管其 Git 设置和环境如何。</p><h6 id="_2-4-2-修改-gitattributes文件" tabindex="-1">2.4.2 修改.gitattributes文件 <a class="header-anchor" href="#_2-4-2-修改-gitattributes文件" aria-label="Permalink to &quot;2.4.2 修改.gitattributes文件&quot;">​</a></h6><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>* text eol=lf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Denote all files that are truly binary and should not be modified.</span></span>
<span class="line"><span>*.png   binary</span></span>
<span class="line"><span>*.jpg   binary</span></span>
<span class="line"><span>*.ttf   binary</span></span></code></pre></div><h6 id="_2-4-3-修改编辑器vscode配置" tabindex="-1">2.4.3 修改编辑器vscode配置 <a class="header-anchor" href="#_2-4-3-修改编辑器vscode配置" aria-label="Permalink to &quot;2.4.3 修改编辑器vscode配置&quot;">​</a></h6><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    	&quot;source.fixAll.eslint&quot;: true						//设置代码保存时需要做的工作——启用保存时自动修复,默认只支持.js文件</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>	&quot;files.eol&quot;: &quot;\\n&quot;,										//设置编辑器行尾以LF格式结尾，以匹配git远程代码库</span></span>
<span class="line"><span>	&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;, 	//主要是因为vscode lint规则与project lint规则不一致，保存的时候按A规则format，编辑、提交时又按B规则校验，规则不一致则来回format。</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_2-4-4-eslint配置" tabindex="-1">2.4.4 eslint配置 <a class="header-anchor" href="#_2-4-4-eslint配置" aria-label="Permalink to &quot;2.4.4 eslint配置&quot;">​</a></h6><p>在<code>.eslintrc.js</code>中添加：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&#39;rules&#39;: {</span></span>
<span class="line"><span>		&#39;linebreak-style&#39;: [</span></span>
<span class="line"><span>			&#39;error&#39;,</span></span>
<span class="line"><span>			&#39;unix&#39;</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="_2-4-5-prettier配置" tabindex="-1">2.4.5 prettier配置 <a class="header-anchor" href="#_2-4-5-prettier配置" aria-label="Permalink to &quot;2.4.5 prettier配置&quot;">​</a></h6><p>在<code>.prettierrc</code>中添加：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;endOfLine&quot;: &quot;lf&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考文章：</p><p><a href="https://juejin.cn/post/6844904198409027597" target="_blank" rel="noreferrer">win10与mac，CRLF与LF的冲突</a></p><p><a href="https://eslint.org/docs/latest/rules/linebreak-style#rule-details" target="_blank" rel="noreferrer">linebreak-style</a></p><p><a href="https://blog.nowcoder.net/n/3d5eb48a17e440ae88bf9ce962266b6b" target="_blank" rel="noreferrer">请把 .gitattributes 加到你的 Git 仓库中</a></p><p><a href="https://blog.csdn.net/mitays/article/details/122663996" target="_blank" rel="noreferrer">Git 初始化配置及常用命令</a></p><p>[<a href="https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#refreshing-a-repository-after-changing-line-endings" target="_blank" rel="noreferrer">git官方文档] 配置 Git 处理行结束符</a></p><h5 id="_2-5-git忽略文件" tabindex="-1">2.5 git忽略文件 <a class="header-anchor" href="#_2-5-git忽略文件" aria-label="Permalink to &quot;2.5 git忽略文件&quot;">​</a></h5><p>新增并编辑文件<code>.gitignore</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># local env files</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Log files</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Editor directories and files</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span># .vscode</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span></code></pre></div><h2 id="实战-配置项目工程化" tabindex="-1">实战：配置项目工程化 <a class="header-anchor" href="#实战-配置项目工程化" aria-label="Permalink to &quot;实战：配置项目工程化&quot;">​</a></h2><p>我们以vite+vue项目进行举例配置，项目空脚手架地址：</p><p><a href="https://gitee.com/waywordcode/vite-cli" target="_blank" rel="noreferrer">viteCli: vue3.2+router4.0+vuex4.0+typescript+vite+andesign实现的项目环境demo (gitee.com)</a></p>`,172),e=[p];function h(k,r,c,o,d,g){return n(),a("div",null,e)}const f=s(l,[["render",h]]);export{y as __pageData,f as default};
