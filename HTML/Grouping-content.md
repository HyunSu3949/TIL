`<ol>,<ul>`의 자식요소는 `<li>`만 가능

`<dl>`: 정의목록  
`<dt>`: 정의할 용어  
`<dd>`: 용어 설명

`<div>` 남발 금지. 대체할 태그가 없을때 사용

`<hr>` 가로줄, 장면 전환 혹은 문단 안에서 주제가 변경

<hr>

`<figure>, <figcaption>`: 이미지와 캡션이 연결

```javascript
<figure>
	<img src="images/baby.jpg" alt="엄마 코끼리와 아기 코끼리">
	<figcaption>
		관심 받고싶어하는 아기
	</figcaption>
</figure>
```

![figure 예시](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28afb5bd-2e99-4dc1-a8f6-c047f5c112a3%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.15.01.png?table=block&id=dbbb8504-3687-4d54-824a-5e7f3e7bf4c4&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=620&userId=&cache=v2)

<hr>

`<pre>` : HTML에 작성한 내용 그대로 화면에 표현. 주로 컴퓨터 코드를 표현

```javascript
<pre>
  <code>
    let val= 1;
    function myFunc(value){
      return value;
    }
    myFunc(val);
  </code>
</pre>
```

<pre>
  <code>
    let val= 1;
    function myFunc(value){
      return value;
    }
    myFunc(val);
  </code>
</pre>

<hr>

`<blockquote>`

```javascript
<blockquote>
    <p>제발 그만해.. 이러다가 다~~ 죽어!</p>
    <cite>영화 오징어게임중에서. 오일남</cite>
</blockquote>

<p><q>제발 그만해.. 이러다 다~~ 죽어!</q>라고 오일남이 소리쳤습니다.<p>
```

<blockquote>
    <p>제발 그만해.. 이러다가 다~~ 죽어!</p>
    <cite>영화 오징어게임중에서. 오일남</cite>
</blockquote>

<p><q>제발 그만해.. 이러다 다~~ 죽어!</q>라고 오일남이 소리쳤습니다.<p>

<hr>

`<main>`  
문서의 주요 콘텐츠
메인 요소안에 들어가는 내용은 문서의 유일한 내용  
다른 페이지나 섹션에서 반복적으로 표시 될수 있는 정보, 예를 들어 사이트 로고, 검색 폼, 저작권 정보 등은 들어가지 않습니다.

<hr>

## Entity

문자를 대체하기 위한 용도

ex) & => `&amp;`

`A&B` 에서 ' & '문자를 작성하기 위해 아래와 같이 사용

```
A&amp;B
```
