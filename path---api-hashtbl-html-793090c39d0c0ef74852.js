webpackJsonp([283],{"./node_modules/json-loader/index.js!./.cache/json/api-hashtbl-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Hashtbl.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Genlex.html" title="Genlex">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Int32.html" title="Int32">Next</a>\n</div>\n<h1>Module <a href="type_Hashtbl.html">Hashtbl</a></h1>\n\n<pre><span class="keyword">module</span> Hashtbl: sig .. end</pre><div class="info module top">\nHash tables and hash functions.\n<p>\n\n   Hash tables are hashed association tables, with in-place modification.<br>\n</p></div>\n<hr width="100%">\n<br>\n<h6 id="6_Genericinterface">Generic interface</h6><br>\n\n<pre id="TYPEt"><span class="keyword">type</span> t(&apos;a, &apos;b);\n</pre>\n<div class="info ">\nThe type of hash tables from type <code class="code">&apos;a</code> to type <code class="code">&apos;b</code>.<br>\n</div>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: (~random: bool=?, int) =&gt; t(&apos;a, &apos;b);\n</pre><div class="info ">\n<code class="code">Hashtbl.create n</code> creates a new, empty hash table, with\n   initial size <code class="code">n</code>.  For best results, <code class="code">n</code> should be on the\n   order of the expected number of elements that will be in\n   the table.  The table grows as needed, so <code class="code">n</code> is just an\n   initial guess.\n<p>\n\n   The optional <code class="code">random</code> parameter (a boolean) controls whether\n   the internal organization of the hash table is randomized at each\n   execution of <code class="code">Hashtbl.create</code> or deterministic over all executions.\n</p><p>\n\n   A hash table that is created with <code class="code">~random:false</code> uses a\n   fixed hash function (<a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>) to distribute keys among\n   buckets.  As a consequence, collisions between keys happen\n   deterministically.  In Web-facing applications or other\n   security-sensitive applications, the deterministic collision\n   patterns can be exploited by a malicious user to create a\n   denial-of-service attack: the attacker sends input crafted to\n   create many collisions in the table, slowing the application down.\n</p><p>\n\n   A hash table that is created with <code class="code">~random:true</code> uses the seeded\n   hash function <a href="Hashtbl.html#VALseeded_hash"><code class="code">Hashtbl.seeded_hash</code></a> with a seed that is randomly\n   chosen at hash table creation time.  In effect, the hash function\n   used is randomly selected among <code class="code">2^{30}</code> different hash functions.\n   All these hash functions have different collision patterns,\n   rendering ineffective the denial-of-service attack described above.\n   However, because of randomization, enumerating all elements of the\n   hash table using <a href="Hashtbl.html#VALfold"><code class="code">Hashtbl.fold</code></a> or <a href="Hashtbl.html#VALiter"><code class="code">Hashtbl.iter</code></a> is no longer\n   deterministic: elements are enumerated in different orders at\n   different runs of the program.\n</p><p>\n\n   If no <code class="code">~random</code> parameter is given, hash tables are created\n   in non-random mode by default.  This default can be changed\n   either programmatically by calling <a href="Hashtbl.html#VALrandomize"><code class="code">Hashtbl.randomize</code></a> or by\n   setting the <code class="code">R</code> flag in the <code class="code">OCAMLRUNPARAM</code> environment variable.<br>\n<b>Before 4.00.0 </b> the <code class="code">random</code> parameter was not present and all\n   hash tables were created in non-randomized mode.<br>\n</p></div>\n\n<pre id="VALclear"><span class="keyword">let</span> clear: t(&apos;a, &apos;b) =&gt; unit;\n</pre><div class="info ">\nEmpty a hash table. Use <code class="code">reset</code> instead of <code class="code">clear</code> to shrink the\n    size of the bucket table to its initial size.<br>\n</div>\n\n<pre id="VALreset"><span class="keyword">let</span> reset: t(&apos;a, &apos;b) =&gt; unit;\n</pre><div class="info ">\nEmpty a hash table and shrink the size of the bucket table\n    to its initial size.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALcopy"><span class="keyword">let</span> copy: t(&apos;a, &apos;b) =&gt; t(&apos;a, &apos;b);\n</pre><div class="info ">\nReturn a copy of the given hashtable.<br>\n</div>\n\n<pre id="VALadd"><span class="keyword">let</span> add: (t(&apos;a, &apos;b), &apos;a, &apos;b) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Hashtbl.add tbl x y</code> adds a binding of <code class="code">x</code> to <code class="code">y</code> in table <code class="code">tbl</code>.\n   Previous bindings for <code class="code">x</code> are not removed, but simply\n   hidden. That is, after performing <a href="Hashtbl.html#VALremove"><code class="code">Hashtbl.remove</code></a><code class="code"> tbl x</code>,\n   the previous binding for <code class="code">x</code>, if any, is restored.\n   (Same behavior as with association lists.)<br>\n</div>\n\n<pre id="VALfind"><span class="keyword">let</span> find: (t(&apos;a, &apos;b), &apos;a) =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">Hashtbl.find tbl x</code> returns the current binding of <code class="code">x</code> in <code class="code">tbl</code>,\n   or raises <code class="code">Not_found</code> if no such binding exists.<br>\n</div>\n\n<pre id="VALfind_all"><span class="keyword">let</span> find_all: (t(&apos;a, &apos;b), &apos;a) =&gt; list(&apos;b);\n</pre><div class="info ">\n<code class="code">Hashtbl.find_all tbl x</code> returns the list of all data\n   associated with <code class="code">x</code> in <code class="code">tbl</code>.\n   The current binding is returned first, then the previous\n   bindings, in reverse order of introduction in the table.<br>\n</div>\n\n<pre id="VALmem"><span class="keyword">let</span> mem: (t(&apos;a, &apos;b), &apos;a) =&gt; bool;\n</pre><div class="info ">\n<code class="code">Hashtbl.mem tbl x</code> checks if <code class="code">x</code> is bound in <code class="code">tbl</code>.<br>\n</div>\n\n<pre id="VALremove"><span class="keyword">let</span> remove: (t(&apos;a, &apos;b), &apos;a) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Hashtbl.remove tbl x</code> removes the current binding of <code class="code">x</code> in <code class="code">tbl</code>,\n   restoring the previous binding if it exists.\n   It does nothing if <code class="code">x</code> is not bound in <code class="code">tbl</code>.<br>\n</div>\n\n<pre id="VALreplace"><span class="keyword">let</span> replace: (t(&apos;a, &apos;b), &apos;a, &apos;b) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Hashtbl.replace tbl x y</code> replaces the current binding of <code class="code">x</code>\n   in <code class="code">tbl</code> by a binding of <code class="code">x</code> to <code class="code">y</code>.  If <code class="code">x</code> is unbound in <code class="code">tbl</code>,\n   a binding of <code class="code">x</code> to <code class="code">y</code> is added to <code class="code">tbl</code>.\n   This is functionally equivalent to <a href="Hashtbl.html#VALremove"><code class="code">Hashtbl.remove</code></a><code class="code"> tbl x</code>\n   followed by <a href="Hashtbl.html#VALadd"><code class="code">Hashtbl.add</code></a><code class="code"> tbl x y</code>.<br>\n</div>\n\n<pre id="VALiter"><span class="keyword">let</span> iter: ((&apos;a, &apos;b) =&gt; unit, t(&apos;a, &apos;b)) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Hashtbl.iter f tbl</code> applies <code class="code">f</code> to all bindings in table <code class="code">tbl</code>.\n   <code class="code">f</code> receives the key as first argument, and the associated value\n   as second argument. Each binding is presented exactly once to <code class="code">f</code>.\n<p>\n\n   The order in which the bindings are passed to <code class="code">f</code> is unspecified.\n   However, if the table contains several bindings for the same key,\n   they are passed to <code class="code">f</code> in reverse order of introduction, that is,\n   the most recent binding is passed first.\n</p><p>\n\n   If the hash table was created in non-randomized mode, the order\n   in which the bindings are enumerated is reproducible between\n   successive runs of the program, and even between minor versions\n   of OCaml.  For randomized hash tables, the order of enumeration\n   is entirely random.<br>\n</p></div>\n\n<pre id="VALfold"><span class="keyword">let</span> fold: ((&apos;a, &apos;b, &apos;c) =&gt; &apos;c, t(&apos;a, &apos;b), &apos;c) =&gt; &apos;c;\n</pre><div class="info ">\n<code class="code">Hashtbl.fold f tbl init</code> computes\n   <code class="code">(f kN dN ... (f k1 d1 init)...)</code>,\n   where <code class="code">k1 ... kN</code> are the keys of all bindings in <code class="code">tbl</code>,\n   and <code class="code">d1 ... dN</code> are the associated values.\n   Each binding is presented exactly once to <code class="code">f</code>.\n<p>\n\n   The order in which the bindings are passed to <code class="code">f</code> is unspecified.\n   However, if the table contains several bindings for the same key,\n   they are passed to <code class="code">f</code> in reverse order of introduction, that is,\n   the most recent binding is passed first.\n</p><p>\n\n   If the hash table was created in non-randomized mode, the order\n   in which the bindings are enumerated is reproducible between\n   successive runs of the program, and even between minor versions\n   of OCaml.  For randomized hash tables, the order of enumeration\n   is entirely random.<br>\n</p></div>\n\n<pre id="VALlength"><span class="keyword">let</span> length: t(&apos;a, &apos;b) =&gt; int;\n</pre><div class="info ">\n<code class="code">Hashtbl.length tbl</code> returns the number of bindings in <code class="code">tbl</code>.\n   It takes constant time.  Multiple bindings are counted once each, so\n   <code class="code">Hashtbl.length</code> gives the number of times <code class="code">Hashtbl.iter</code> calls its\n   first argument.<br>\n</div>\n\n<pre id="VALrandomize"><span class="keyword">let</span> randomize: unit =&gt; unit;\n</pre><div class="info ">\nAfter a call to <code class="code">Hashtbl.randomize()</code>, hash tables are created in\n    randomized mode by default: <a href="Hashtbl.html#VALcreate"><code class="code">Hashtbl.create</code></a> returns randomized\n    hash tables, unless the <code class="code">~random:false</code> optional parameter is given.\n    The same effect can be achieved by setting the <code class="code">R</code> parameter in\n    the <code class="code">OCAMLRUNPARAM</code> environment variable.\n<p>\n\n    It is recommended that applications or Web frameworks that need to\n    protect themselves against the denial-of-service attack described\n    in <a href="Hashtbl.html#VALcreate"><code class="code">Hashtbl.create</code></a> call <code class="code">Hashtbl.randomize()</code> at initialization\n    time.\n</p><p>\n\n    Note that once <code class="code">Hashtbl.randomize()</code> was called, there is no way\n    to revert to the non-randomized default behavior of <a href="Hashtbl.html#VALcreate"><code class="code">Hashtbl.create</code></a>.\n    This is intentional.  Non-randomized hash tables can still be\n    created using <code class="code">Hashtbl.create ~random:false</code>.<br>\n<b>Since</b> 4.00.0<br>\n</p></div>\n\n<pre><span class="keyword">type</span> statistics = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>num_bindings&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of bindings present in the table.\n        Same value as returned by <a href="Hashtbl.html#VALlength"><code class="code">Hashtbl.length</code></a>.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>num_buckets&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of buckets in the table.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>max_bucket_length&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nMaximal number of bindings per bucket.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>bucket_histogram&#xA0;: int array;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nHistogram of bucket sizes.  This array <code class="code">histo</code> has\n        length <code class="code">max_bucket_length + 1</code>.  The value of\n        <code class="code">histo.(i)</code> is the number of buckets whose size is <code class="code">i</code>.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n}\n\n\n\n<pre id="VALstats"><span class="keyword">let</span> stats: t(&apos;a, &apos;b) =&gt; statistics;\n</pre><div class="info ">\n<code class="code">Hashtbl.stats tbl</code> returns statistics about the table <code class="code">tbl</code>:\n   number of buckets, size of the biggest bucket, distribution of\n   buckets by size.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n<br>\n<h6 id="6_Functorialinterface">Functorial interface</h6><br>\n<br>\n<h6 id="6_Functorialinterface">Functorial interface</h6><br>\n<br>\nThe functorial interface allows the use of specific comparison\n    and hash functions, either for performance/security concerns,\n    or because keys are not hashable/comparable with the polymorphic builtins.\n<p>\n\n    For instance, one might want to specialize a table for integer keys:\n    </p><pre class="codepre">      module IntHash =\n        struct\n          type t = int\n          let equal i j = i=j\n          let hash i = i land max_int\n        end\n\n      module IntHashtbl = Hashtbl.Make(IntHash)\n\n      let h = IntHashtbl.create 17 in\n      IntHashtbl.add h 12 &quot;hello&quot;;;\n    </pre>\n<p>\n\n    This creates a new module <code class="code">IntHashtbl</code>, with a new type <code class="code">&apos;a\n    IntHashtbl.t</code> of tables from <code class="code">int</code> to <code class="code">&apos;a</code>. In this example, <code class="code">h</code>\n    contains <code class="code">string</code> values so its type is <code class="code">string IntHashtbl.t</code>.\n</p><p>\n\n    Note that the new type <code class="code">&apos;a IntHashtbl.t</code> is not compatible with\n    the type <code class="code">(&apos;a,&apos;b) Hashtbl.t</code> of the generic interface. For\n    example, <code class="code">Hashtbl.length h</code> would not type-check, you must use\n    <code class="code">IntHashtbl.length</code>.<br>\n\n</p><pre><span class="keyword">module</span> type HashedType = sig .. end</pre><div class="info">\nThe input signature of the functor <a href="Hashtbl.Make.html"><code class="code">Hashtbl.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info">\nThe output signature of the functor <a href="Hashtbl.Make.html"><code class="code">Hashtbl.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> Make: (H: HashedType) =&gt; S with type key = H.t;\n</pre><div class="info">\nFunctor building an implementation of the hashtable structure.\n</div>\n\n<pre><span class="keyword">module</span> type SeededHashedType = sig .. end</pre><div class="info">\nThe input signature of the functor <a href="Hashtbl.MakeSeeded.html"><code class="code">Hashtbl.MakeSeeded</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> type SeededS = sig .. end</pre><div class="info">\nThe output signature of the functor <a href="Hashtbl.MakeSeeded.html"><code class="code">Hashtbl.MakeSeeded</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> MakeSeeded: (H: SeededHashedType) =&gt; SeededS with type key = H.t;\n</pre><div class="info">\nFunctor building an implementation of the hashtable structure.\n</div>\n<br>\n<h6 id="6_Thepolymorphichashfunctions">The polymorphic hash functions</h6><br>\n\n<pre id="VALhash"><span class="keyword">let</span> hash: &apos;a =&gt; int;\n</pre><div class="info ">\n<code class="code">Hashtbl.hash x</code> associates a nonnegative integer to any value of\n   any type. It is guaranteed that\n   if <code class="code">x = y</code> or <code class="code">Pervasives.compare x y = 0</code>, then <code class="code">hash x = hash y</code>.\n   Moreover, <code class="code">hash</code> always terminates, even on cyclic structures.<br>\n</div>\n\n<pre id="VALseeded_hash"><span class="keyword">let</span> seeded_hash: (int, &apos;a) =&gt; int;\n</pre><div class="info ">\nA variant of <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a> that is further parameterized by\n   an integer seed.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALhash_param"><span class="keyword">let</span> hash_param: (int, int, &apos;a) =&gt; int;\n</pre><div class="info ">\n<code class="code">Hashtbl.hash_param meaningful total x</code> computes a hash value for <code class="code">x</code>,\n   with the same properties as for <code class="code">hash</code>. The two extra integer\n   parameters <code class="code">meaningful</code> and <code class="code">total</code> give more precise control over\n   hashing. Hashing performs a breadth-first, left-to-right traversal\n   of the structure <code class="code">x</code>, stopping after <code class="code">meaningful</code> meaningful nodes\n   were encountered, or <code class="code">total</code> nodes (meaningful or not) were\n   encountered.  If <code class="code">total</code> as specified by the user exceeds a certain\n   value, currently 256, then it is capped to that value.\n   Meaningful nodes are: integers; floating-point\n   numbers; strings; characters; booleans; and constant\n   constructors. Larger values of <code class="code">meaningful</code> and <code class="code">total</code> means that\n   more nodes are taken into account to compute the final hash value,\n   and therefore collisions are less likely to happen.  However,\n   hashing takes longer. The parameters <code class="code">meaningful</code> and <code class="code">total</code>\n   govern the tradeoff between accuracy and speed.  As default\n   choices, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a> and <a href="Hashtbl.html#VALseeded_hash"><code class="code">Hashtbl.seeded_hash</code></a> take\n   <code class="code">meaningful = 10</code> and <code class="code">total = 100</code>.<br>\n</div>\n\n<pre id="VALseeded_hash_param"><span class="keyword">let</span> seeded_hash_param: (int, int, int, &apos;a) =&gt; int;\n</pre><div class="info ">\nA variant of <a href="Hashtbl.html#VALhash_param"><code class="code">Hashtbl.hash_param</code></a> that is further parameterized by\n   an integer seed.  Usage:\n   <code class="code">Hashtbl.seeded_hash_param meaningful total seed x</code>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Hashtbl.html"}}}});
//# sourceMappingURL=path---api-hashtbl-html-793090c39d0c0ef74852.js.map