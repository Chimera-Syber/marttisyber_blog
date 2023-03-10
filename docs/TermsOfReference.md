# 1. Цель проекта

Цель проекта - создание удобочитаемого блога с удобным постингом комментарием на фреймворке Symfony. Оттачивание навыков разработки на фреймворке Symfony. 

Основная тематика блога - веб-программирование и другие личные записи автора. 

# 2. Описание блога

Сайт блога должен иметь минималистичный дизайн, который хорошо отображается, как на десктопных устройствах, так и на мобильных. 

## 2.1 Сайт блога

Сайт блога состоит из следующих блоков:
1. Главная страница с бесконечной лентой и с сайдбаром, где размещены информация об авторе, теги и другая дополнительная информация
2. Страница записи блога с комментариями
3. Страница постов по выбранному тегу
4. Страница входа в учетную запись пользователя для публикации комментариев
5. Страница с редактированием профиля пользователя

## 2.2 Административная панель

Административная панель необходима для публикации информации на сайт блога. Доступ к административной странице может иметь только сам автор блога. 

Административная панель состоит из следующих блоков:
1. Страница со всеми публикациями в блоге (только опубликованные посты)
2. Страница с черновиками
3. Страница с созданием/редактированием записи
4. Страница с созданием/редактированием черновика
5. Страница со всеми тегами
6. Страница с созданием/редактированием тегов
7. Страница со всеми пользователями, которые зарегистрировались для публикации комментариев
8. Страница редактирования информации о пользователе
9. Страница со всеми комментариями
10. Страница с модерированием комментариев
11. Страница со статистикой блога

# 3. Сайт блога

## 3.1 Главная страница

### 3.1.1 Header сайта

В Header'e сайта должен находится логотип (можно в виде текста), форма поиска

### 3.1.2 Лента

В блоке поста должна содержаться следующая информация:
1. Дата публикации
2. Превью-картинка (если ее нет, то придумать чем заменять)
3. Заголовок поста
4. Описание поста
5. Количество комментариев

Блоки постов должны подгружаться постранично. Внизу ленты должна находится навигация по страницам. 

### 3.1.2 Сайдбар

Сайдбар должен быть зафиксирован при прокручивании ленты. 

**Блок Об Авторе**

```
Блок с кратким описанием автора и блога
```

**Блог теги**

```
Блок с облаком тегов.
```

**Блок О пользователе**

```
На сайдабре должен быть блок пользователя с кнопкой "Выход". В блоке пользователя, помимо кнопки "Выход" должен быть указан ник, аватар и ссылка на редактирование профиля
```

**Блок Copyright**

```
Блок с копирайтами. 
```

## 3.2 Страница поста с комментариями

### 3.2.1 Ссылка на страницу с постом

Ссылка на страницу с постом должна включать человекочитаемый адрес. Чтобы ссылка была уникально необходимо в адрес включать либо дату поста, либо какой-либо произвольный код. 

### 3.2.2 Тело поста

Тело поста, помимо основного текста, должно включать следующие элементы
1. Превью-картинку (если есть)
2. Количество комментариев
3. Количество просмотров
4. Дату
5. Лайки (на будущее)
6. Поделиться в социальные сети. Список социальных сетей ниже
	1. VK
	2. Telegram
	3. Одноклассники
	4. Twitter

### 3.2.3 Комментарии

Комментарии должны быть отображены в древовидном виде.

Если у пользователя в профиле указана ссылка на его Github, то в самом комментрии ник пользователя также будет иметь ссылку, ведущую на указанный в профиле профиль Github.

Блок комментария должен состоять из следующих блоков:
1. Ник пользователя
2. Дата комментария
3. Лайк
4. Текст комментария
5. Кнопка "Ответить"

## 3.3 Регистрация/вход/выход пользователей

Регистрация пользователя состоит из ввода email. На введенный пользователем email высылается письмо с паролем для входа.  При желании пользователя данный пароль можно будет сменить через страницу профиля пользователя. 

Вход пользователя осуществляется через форму входа, где пользователь вводить свой email и пароль. Форма входа находится на отдельной странице. После входа пользователь должен быть перенаправлен на предыдущую страницу, где он находился. 

Выход пользователя осуществляется через кнопку "Выход", который находится в сайдбаре в блоке пользователя. 

## 3.4 Страница редактирования профиля пользователя

Пользователь может редактировать следующие поля
1. Аватар (загрузка, удаление)
2. Ник
3. Ссылка на Github
4. Ссылки на социальные сети
	1. Youtube
	2. LinkedIn
	3. Vk
	4. Telegram
	5. Twitter
5. Поля для редактирования пароля

Профиль пользователя должен быть максимально обезличенными. 

## 3.5 Страница с постами по тегу

Страница с постами по тегу должна отображать посты по конкретному тегу. Отображение постов идет в постраничном виде. Оформление страницы такое же, как и у главной, добавляется только заголовк тега (возможно, его краткое описание) и далее посты по тегу. 

# 4. Административная панель

Административную панель необходимо написать с использованием фреймворка [Bulma](https://bulma.io/)

Его также можно использовать и для основного сайта. 



# 5. Шрифт

Весь сайт должен быть выполние с использованием одного или двух шрифтов с поддержкой кириллицы. 

Основной шрифт сайта - Source Serif Pro 