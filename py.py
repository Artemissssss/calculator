
#Мій варіант д/з на 08.04.21
import random
a=random.randint(0, 999)
b=random.randint(0, 999)
if a>b :
    print("Зміна a=",a,",a змінна b=",b,".Тому змінна а більша ніж змінна b")
elif a==b :
    print("Зміна a=",a,",a змінна b=",b,".Тому вони рівні")
else: 
    print("Зміна a=",a,",a змінна b=",b,".Тому змінна b більша ніж змінна a")

#Нижче варіант підручника
x=random.randint(0, 999)
y=random.randint(0, 999)
if x>=y :
    print(x)
else: 
    print(y)
#Далі чисто Моя практика для мене по перекладу з Js у Python
#Магазин 
name='Anna'
mony=1000
fruits='strawberry'
meat='meat'
sweets='chokolate'
time=16
day=5
fsum=3
msum=2
ssum=3
fsu=70
msu=150
ssu=30
g=fsu*fsum+msu*msum+ssu*ssum
if time<8 or time>22 or day>=7 or day<=0:
    print('Sorry, dear,',name,'! We aren`t working now.')
elif fsum<=0 or msum<=0 or ssum<= 0 or fruits==meat or fruits==sweets or meat==sweets:
    print('You didn`t buy food, which you need! It is law! You need buy three types of product!')
elif mony<a:
    print('Dear',name,'you haven`t enough money! You need',g-mony,'grn.')
else:
    print('Thanks dear',name,'! You bought,',fsum,fruits,',',msum,meat,',',ssum,sweets,'. From you',g,'gryvna! Come again! Your rest is',mony-g,'grn.')
 
 #Камінь ножиці папір
#   const arr = ["ножиці", "папір", "людина", "колодязь", "вовк","камінь","пістолет"];

# // let userChoise;
# // while (userChoise !== null) {
# //   const randomNumber = Math.round(Math.random() * (arr.length - 1));
# // let computersChoice = arr[randomNumber];
# // // alert(computersChoice,arr[randomNumber]);
# //  userChoise = prompt("Це гра 'Камінь, ножиці, папір' з деякими змінами. Вибирай: камінь,ножиці,папір,людина,колодязь,вовк,пістолет.");
# // if (arr.indexOf(userChoise) === arr.indexOf(computersChoice)) {
# //   alert(`Ніхто не програв і не виграв. Бо ви з комп'ютером вибрали ${(arr[randomNumber])}.`);
# // } else if (userChoise == "камінь") {
# //   if (computersChoice == "папір" || computersChoice =="колодязь") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if (userChoise == "ножиці") {
# //   if (computersChoice == "камінь" || computersChoice =="людина" || computersChoice =="вовк" || computersChoice =="колодязь") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if (userChoise == "папір") {
# //   if (computersChoice == "ножиці" || computersChoice == "людина" || computersChoice =="вовк") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if (userChoise == "людина") {
# //   if (computersChoice == "вовк" || computersChoice =="камінь" || computersChoice =="колодязь") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if (userChoise == "колодязь") {
# //   if (computersChoice == "папір") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if (userChoise == "вовк") {
# //   if (computersChoice =="камінь" || computersChoice =="колодязь") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   } 
# // } else if (userChoise == "пістолет") {
# //   if (computersChoice =="камінь" || computersChoice =="колодязь") {
# //     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
# //   } else {
# //     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
# //   }
# // } else if(userChoise == null){
# //         break;
# //  }else {
# //   alert("Спробуй ще раз! Бо ти неправильно вів значення!");
# // }
# // }