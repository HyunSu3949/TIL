# 깃 명령어

- 붙여넣기 : shift+ins

- $ git clone (url) + .  
  파일 불러오기 : 처음에 파일 불러올때 , 리모트 설정을 자동으로 해주는 초기 다운로드  
  . 을 붙이지 않으면 폴더가 생성된다.

- $ git add . : git이 관리할 대상의 파일 등록하기

- $ git pull . : 수정된 내용 불러올때. 협업 시 사용

- $ git commit -m "수정 설명" : 바뀐 내용 깃에 컴밋, -m " " 은 설명

- $ git push `<remote> <branch> `  
  로컬 브랜치를 원격 저장소(gitHub)로 푸시.  
   매개변수 지정하지 않으면
  git push orgin main이 된다.
  origin은 GitHub 원격 저장소. 즉 orgin은 gitHub repo의 대명사인 격이다.
  현재 작업 중인 브랜치는 main.

- $ git diff : 변경사항 확인

- $ git gitignore : 무시할 파일 (gitignore) 추가 하기

---

# 리눅스 명령어

- $ mkdir 폴더이름 : 폴더생성

- $ cd .. : 상위 폴더로 이동

- $ cd 폴더이름 : 폴더로 이동

- $ touch test.html : test.html 파일 생성

- $ vi test.html  
   i : 편집 사용  
   ESC : 편집 끝내기  
  :wq :나가기

- $ rm 파일이름 : 파일 삭제

- $ rmdir 폴더이름 : 디렉토리 삭제
