
#Wbar object
> 간단한 마크업 만으로도 쉽게 활용 가능한 바 그래프를 생성해주는 자바스크립트 오브젝트 입니다.

-

### 1. Markup

* 바 그래프들 전체를 감싸는 컨테이너 안에 개별 그래프들을 아래와 같이 작성하면됨.
* 개발 그래프 컨테이너의 클래스에는 반드시 `wbar` 가 필요함.
* `wbar-value` 로 각 그래프의 수치 값을 입력함. 
* 지원 색상은 `blue, purple, green , yellow, orange` .

```html
<div class="skills">
  <div class="wbar orange">
    <span class="wbar-name">AngularJS</span>
    <span class="wbar-value">80</span>
  </div>
  <div class="wbar blue">
    <span class="wbar-name">React</span>
    <span class="wbar-value">80</span>
  </div>
</div>
```

-

### 2. Javascript

* 오브젝트 인터페이스 

```
Wbar(selector, maxvalue, barlength, barheight)
```


* 사용 방법
  * 전체를 감싸는 컨테이너의 클래스를 입력하여 내부의 모든 바 그래프에 같은 기준의 최대값을 적용함.
```js
 var skills = new Wbar('.skills', 100);
```

