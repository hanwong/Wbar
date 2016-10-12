#Wbar object
> 간단한 마크업 만으로도 쉽게 활용 가능한 바 그래프를 생성해주는 자바스크립트 오브젝트 입니다.

-

### 1. Markup

* 바 그래프들 전체를 감싸는 컨테이너 안에 개별 그래프들을 아래와 같이 작성하면됨.
* 개발 그래프 컨테이너의 클래스에는 반드시 `wbar` 가 필요함.
* `wbar-value` 로 각 그래프의 수치 값을 입력함. 

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

* 지원 색상은 `blue, purple, green , yellow, orange` .

<style>
  .blue {
     background: linear-gradient(to top, #1991eb 0%, #2ea1f8 100%);
  }
  .purple {
     background: linear-gradient(to top, #7f5be6 0%, #9d8fe3 100%);
  }
  .green {
     background: linear-gradient(to top, #24b00d 0%, #59da44 100%);
  }
  .yellow {
     background: linear-gradient(to top, #fdba00 0%, #f8cf5d 100%);
  }
  .orange {
     background: linear-gradient(to top, #EB4E20 0%, #E4674A 100%);
  }
</style>

<div class="blue">blue</div>
<div class="purple">purple</div>
<div class="green">green</div>
<div class="yellow">yellow</div>
<div class="orange">orange</div>

-

### 2. Javascript

* 오브젝트 인터페이스 

```
Wbar(selector, maxvalue, barlength, barheight)
```


* 사용 방법
  * 전체를 감싸는 컨테이너의 클래스를 입력하여 내부의 모든 바 그래프에 같은 기준의 최대값을 적용함.
```js
 var product_sales = new Wbar('.skills', 100);
```

