
# Table of Contents

1.  [MNF130](#orgae1bdf3)
    1.  [Truth tables](#orgd17ff55)
        1.  [Tautologi](#org566b25e)
        2.  [Impliserer](#org02250c6)


<a id="orgae1bdf3"></a>

# MNF130


<a id="orgd17ff55"></a>

## Truth tables

How to fill out truth tables

-   **&not;:** Betyr at noe ikke er. \(\neg p\) betyr derfor IKKE p.
-   **&or;:** Betyr eller. \(p \vee q\) vil da si p ELLER q.
-   **&and;:** Betyr og. \(p \land q\) vil da si p OG q.

**\(\neg p\)**

<table id="orge6cd11c" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">p</td>
<td class="org-left">q</td>
<td class="org-left">&not; p</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
</tr>
</tbody>
</table>

**\(p \to \neg (p \land q)\)**

<table id="orgde8a1ec" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">\(p\)</td>
<td class="org-left">\(q\)</td>
<td class="org-left">\(p \land q\)</td>
<td class="org-left">\(\neg p \land q\)</td>
<td class="org-left">\(p \rightarrow \neg (p \land q)\)</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>
</tbody>
</table>

-   Sett inn verdiane for p og q for å få alle mulige kombinasjonar av q og p.
-   Så er \(p \land q\) True hvis og berre hvis begge er true.
-   Ikke p og q er det motsatte.
-   Det fullstendige uttrykket er sant om det til høgre for pila er sant.

**\((p \vee \neg q) \leftrightarrow r\)**

<table id="org1632893" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">\(p\)</td>
<td class="org-left">\(q\)</td>
<td class="org-left">\(r\)</td>
<td class="org-left">\(\neg q\)</td>
<td class="org-left">\(p \lor \neg q\)</td>
<td class="org-left">\((p \lor \neg q) \leftrightarrow r\)</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
</tr>
</tbody>
</table>

-   Sett in verdiane for p, q og r for å få alle mulige kombinasjonar av p, q og r.
-   Så er $ &not; q$ det motsatte av q.
-   \(p \lor \neg q\) er sant hvis enten p ELLER \(\neg q\) er sann.
-   Det fullstendige uttrykket er sant hvis, og bare hvis, \((p \lor q) /OG/ r\) er **sann** *ELLER* **usann**.

**\([(p \rightarrow q) \land (q \rightarrow r)] \rightarrow (p \rightarrow r)\)**

<table id="org3ac80c9" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">\(p\)</td>
<td class="org-left">\(q\)</td>
<td class="org-left">\(r\)</td>
<td class="org-left">\(p \rightarrow q\)</td>
<td class="org-left">\((p \rightarrow q) \land (q \rightarrow r)\)</td>
<td class="org-left">\(p \rightarrow r\)</td>
<td class="org-left">\([(p \rightarrow q) \land (q \rightarrow r)] \rightarrow (p \rightarrow r)\)</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>


<tr>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">F</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
<td class="org-left">T</td>
</tr>
</tbody>
</table>

Vi kan konkludere med at siden uttrykket til tabellen over er true at
dette er en tautologi.


<a id="org566b25e"></a>

### Tautologi

-   **Tautologi:**

> A compound proposition that is always true, no matter what the truth values of
> the propositional variables that occur in it, is called a *tautology.* A compound
> proposition that is always false is called a *contradiction*. A compound
> proposition that is neither a tautology nor a contradiction is called a *contingency*.


<a id="org02250c6"></a>

### Impliserer

-   **Dette er reglene for &rarr; (impliserer):**

> **NB**: Husk at &rarr; Er true så lenge true ikke impliserer false.
>
> <table id="org2ff24e6" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
>
>
> <colgroup>
> <col  class="org-left" />
>
> <col  class="org-left" />
>
> <col  class="org-left" />
> </colgroup>
> <tbody>
> <tr>
> <td class="org-left">\(p\)</td>
> <td class="org-left">\(q\)</td>
> <td class="org-left">\(p \rightarrow q\)</td>
> </tr>
>
>
> <tr>
> <td class="org-left">T</td>
> <td class="org-left">T</td>
> <td class="org-left">T</td>
> </tr>
>
>
> <tr>
> <td class="org-left">T</td>
> <td class="org-left">F</td>
> <td class="org-left">F</td>
> </tr>
>
>
> <tr>
> <td class="org-left">F</td>
> <td class="org-left">T</td>
> <td class="org-left">T</td>
> </tr>
>
>
> <tr>
> <td class="org-left">F</td>
> <td class="org-left">F</td>
> <td class="org-left">T</td>
> </tr>
> </tbody>
> </table>
