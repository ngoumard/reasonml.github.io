webpackJsonp([301],{"./node_modules/json-loader/index.js!./.cache/json/api-buffer-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Buffer.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="ArrayLabels.html" title="ArrayLabels">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Bytes.html" title="Bytes">Next</a>\n</div>\n<h1>Module <a href="type_Buffer.html">Buffer</a></h1>\n\n<pre><span class="keyword">module</span> Buffer: sig .. end</pre><div class="info module top">\nExtensible buffers.\n<p>\n\n   This module implements buffers that automatically expand\n   as necessary.  It provides accumulative concatenation of strings\n   in quasi-linear time (instead of quadratic time when strings are\n   concatenated pairwise).<br>\n</p></div>\n<hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe abstract type of buffers.<br>\n</div>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: int =&gt; t;\n</pre><div class="info ">\n<code class="code">create n</code> returns a fresh buffer, initially empty.\n   The <code class="code">n</code> parameter is the initial size of the internal byte sequence\n   that holds the buffer contents. That byte sequence is automatically\n   reallocated when more than <code class="code">n</code> characters are stored in the buffer,\n   but shrinks back to <code class="code">n</code> characters when <code class="code">reset</code> is called.\n   For best performance, <code class="code">n</code> should be of the same order of magnitude\n   as the number of characters that are expected to be stored in\n   the buffer (for instance, 80 for a buffer that holds one output\n   line).  Nothing bad will happen if the buffer grows beyond that\n   limit, however. In doubt, take <code class="code">n = 16</code> for instance.\n   If <code class="code">n</code> is not between 1 and <a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>, it will\n   be clipped to that interval.<br>\n</div>\n\n<pre id="VALcontents"><span class="keyword">let</span> contents: t =&gt; string;\n</pre><div class="info ">\nReturn a copy of the current contents of the buffer.\n    The buffer itself is unchanged.<br>\n</div>\n\n<pre id="VALto_bytes"><span class="keyword">let</span> to_bytes: t =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the current contents of the buffer.\n    The buffer itself is unchanged.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre id="VALsub"><span class="keyword">let</span> sub: (t, int, int) =&gt; string;\n</pre><div class="info ">\n<code class="code">Buffer.sub b off len</code> returns (a copy of) the bytes from the\n    current contents of the buffer <code class="code">b</code> starting at offset <code class="code">off</code> of\n    length <code class="code">len</code> bytes. May raise <code class="code">Invalid_argument</code> if out of bounds\n    request. The buffer itself is unaffected.<br>\n</div>\n\n<pre id="VALblit"><span class="keyword">let</span> blit: (t, int, bytes, int, int) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Buffer.blit src srcoff dst dstoff len</code> copies <code class="code">len</code> characters from\n   the current contents of the buffer <code class="code">src</code>, starting at offset <code class="code">srcoff</code>\n   to <code class="code">dst</code>, starting at character <code class="code">dstoff</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">srcoff</code> and <code class="code">len</code> do not designate a valid\n   range of <code class="code">src</code>, or if <code class="code">dstoff</code> and <code class="code">len</code> do not designate a valid\n   range of <code class="code">dst</code>.<br>\n<b>Since</b> 3.11.2<br>\n</p></div>\n\n<pre id="VALnth"><span class="keyword">let</span> nth: (t, int) =&gt; char;\n</pre><div class="info ">\nget the n-th character of the buffer. Raise <code class="code">Invalid_argument</code> if\n    index out of bounds<br>\n</div>\n\n<pre id="VALlength"><span class="keyword">let</span> length: t =&gt; int;\n</pre><div class="info ">\nReturn the number of characters currently contained in the buffer.<br>\n</div>\n\n<pre id="VALclear"><span class="keyword">let</span> clear: t =&gt; unit;\n</pre><div class="info ">\nEmpty the buffer.<br>\n</div>\n\n<pre id="VALreset"><span class="keyword">let</span> reset: t =&gt; unit;\n</pre><div class="info ">\nEmpty the buffer and deallocate the internal byte sequence holding the\n   buffer contents, replacing it with the initial internal byte sequence\n   of length <code class="code">n</code> that was allocated by <a href="Buffer.html#VALcreate"><code class="code">Buffer.create</code></a> <code class="code">n</code>.\n   For long-lived buffers that may have grown a lot, <code class="code">reset</code> allows\n   faster reclamation of the space used by the buffer.<br>\n</div>\n\n<pre id="VALadd_char"><span class="keyword">let</span> add_char: (t, char) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_char b c</code> appends the character <code class="code">c</code> at the end of the buffer <code class="code">b</code>.<br>\n</div>\n\n<pre id="VALadd_string"><span class="keyword">let</span> add_string: (t, string) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_string b s</code> appends the string <code class="code">s</code> at the end of the buffer <code class="code">b</code>.<br>\n</div>\n\n<pre id="VALadd_bytes"><span class="keyword">let</span> add_bytes: (t, bytes) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_string b s</code> appends the string <code class="code">s</code> at the end of the buffer <code class="code">b</code>.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre id="VALadd_substring"><span class="keyword">let</span> add_substring: (t, string, int, int) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_substring b s ofs len</code> takes <code class="code">len</code> characters from offset\n   <code class="code">ofs</code> in string <code class="code">s</code> and appends them at the end of the buffer <code class="code">b</code>.<br>\n</div>\n\n<pre id="VALadd_subbytes"><span class="keyword">let</span> add_subbytes: (t, bytes, int, int) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_substring b s ofs len</code> takes <code class="code">len</code> characters from offset\n    <code class="code">ofs</code> in byte sequence <code class="code">s</code> and appends them at the end of the buffer <code class="code">b</code>.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre id="VALadd_substitute"><span class="keyword">let</span> add_substitute: (t, string =&gt; string, string) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_substitute b f s</code> appends the string pattern <code class="code">s</code> at the end\n   of the buffer <code class="code">b</code> with substitution.\n   The substitution process looks for variables into\n   the pattern and substitutes each variable name by its value, as\n   obtained by applying the mapping <code class="code">f</code> to the variable name. Inside the\n   string pattern, a variable name immediately follows a non-escaped\n   <code class="code">$</code> character and is one of the following:<ul>\n<li>a non empty sequence of alphanumeric or <code class="code">_</code> characters,</li>\n<li>an arbitrary sequence of characters enclosed by a pair of\n   matching parentheses or curly brackets.\n   An escaped <code class="code">$</code> character is a <code class="code">$</code> that immediately follows a backslash\n   character; it then stands for a plain <code class="code">$</code>.\n   Raise <code class="code">Not_found</code> if the closing character of a parenthesized variable\n   cannot be found.</li>\n</ul>\n<br>\n</div>\n\n<pre id="VALadd_buffer"><span class="keyword">let</span> add_buffer: (t, t) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_buffer b1 b2</code> appends the current contents of buffer <code class="code">b2</code>\n   at the end of buffer <code class="code">b1</code>.  <code class="code">b2</code> is not modified.<br>\n</div>\n\n<pre id="VALadd_channel"><span class="keyword">let</span> add_channel: (t, Pervasives.in_channel, int) =&gt; unit;\n</pre><div class="info ">\n<code class="code">add_channel b ic n</code> reads exactly <code class="code">n</code> character from the\n   input channel <code class="code">ic</code> and stores them at the end of buffer <code class="code">b</code>.\n   Raise <code class="code">End_of_file</code> if the channel contains fewer than <code class="code">n</code>\n   characters.<br>\n</div>\n\n<pre id="VALoutput_buffer"><span class="keyword">let</span> output_buffer: (Pervasives.out_channel, t) =&gt; unit;\n</pre><div class="info ">\n<code class="code">output_buffer oc b</code> writes the current contents of buffer <code class="code">b</code>\n   on the output channel <code class="code">oc</code>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Buffer.html"}}}});
//# sourceMappingURL=path---api-buffer-html-f526e8a2b9c972f2b6fa.js.map