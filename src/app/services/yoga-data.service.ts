import { Injectable, signal } from '@angular/core';
import { IYogaClass } from '../models/yoga-class.interface';
import { IContactInfo } from '../models/contact.interface';
import { IGalleryImage } from '../models/gallery-image.interface';
import { IRecommendation } from '../models/recommendation.interface';

@Injectable({
  providedIn: 'root'
})
export class YogaDataService {
  private readonly yogaClasses = signal<IYogaClass[]>([
    {
      id: '1',
      title: 'יוגה ויניאסה',
      description: 'תרגול יוגה דינמי ומשתנה, תנועתיות זורמת ונעימה. דגש על שילוב נשימה-תנועה-זרימה'
    },
    {
      id: '2',
      title: 'יוגה אשטנגה',
      description: 'תרגול יוגה שרצף האסאנות קבוע. ההנחייה, הסדר והקצב יהיו זהים בכל שיעור. סנכרון של שאיפה-נשיפה-תנועה. אפשרות לתת לגוף ולמיינד להגיע למצב מדיטטיבי. תרגול יחסית מהיר ופיזי'
    },
    {
      id: '3',
      title: 'שיעורי עיצוב וחיטוב',
      description: 'תרגילים לחיזוק, גמישות ועיצוב הגוף. עבודה אינטנסיבית על שרירי הליבה תוך חיזוק, הארכה ושמירה על גוף בריא'
    },
    {
      id: '4',
      title: 'יוגה ילדות',
      description: 'הנגשת עולם היוגה לילדות באמצעות שירים, דקלומים, סיפורים אביזרים ועוד.. שיעור מהנה עם ערך מוסף של שליטה בגוף, וויסות עצמי, הכרות עם הגוף, נשימה בריאה ונכונה, תשומת לב והתבוננות פנימה'
    },
    {
      id: '5',
      title: 'שיעורים לגילאי 60+',
      description: 'תרגול ייעודי לגילאי 60 פלוס לחיזוק השרירים והעצמות, מניעת פציעות, עבודה על קורדינציה, שיווי משקל וכוח וכל זה בתרגול עדין, מותאם ורך לאוכלוסייה'
    },
    {
      id: '6',
      title: 'מחול מודרני',
      description: 'שיעור מחול, ריקוד בטכניקה המודרנית. השיעור משלב חימום, עבודת רצפה, פינה, קומבינציות ואימפרוביזציה- אלתור. שיעור כיפי עם דופק מהיר'
    },
    {
      id: '7',
      title: 'יוגה רגישה לטראומה',
      description: 'הנגשת עולם היוגה למתמודדי PTSD. שיעורי יוגה רכה בדגש על הרגעת מערכת העצבים, החזרת תחושת הביטחון, וויסות ורגיעה. תרגול פיזי בשילוב טכניקות נשימה להשקטה ואיזון. (שיעורים גם לגברים בנפרד)'
    },
    {
      id: '8',
      title: 'פילאטיס',
      description: 'שיעורי פילאטיס מזרן בונים כוח, גמישות וטונוס שרירים תוך דגש על התארכות של הגוף ושמירה על מיקום מדוייק של חוליות עמוד השדרה ודגש על שרירי הליבה'
    }
  ]);

  private readonly contactInfo = signal<IContactInfo>({
    phone: '0548042445',
    email: 'talifogel0@gmail.com',
    address: 'דרך ארץ 54, חריש'
  });

  private readonly galleryImages = signal<IGalleryImage[]>(this.shuffleArray([
    {
      id: '1',
      src: 'assets/images/gallery/1000094639.jpg',
      alt: 'סטודיו יוגה - תרגול קבוצתי',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '2',
      src: 'assets/images/gallery/1000094654.jpg',
      alt: 'סטודיו יוגה - חלל מרגיע',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '3',
      src: 'assets/images/gallery/1000094656.jpg',
      alt: 'תרגול יוגה - תנוחת איזון',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '4',
      src: 'assets/images/gallery/1000094683.jpg',
      alt: 'תרגול יוגה - תנוחת גשר',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '5',
      src: 'assets/images/gallery/1000094704.jpg',
      alt: 'תרגול יוגה - תנוחת איזון ידיים',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '6',
      src: 'assets/images/gallery/IMG_1525.JPG',
      alt: 'תרגול יוגה - כפיפה קדימה',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '7',
      src: 'assets/images/gallery/IMG_1531.JPG',
      alt: 'תרגול יוגה - תנוחה מתקדמת',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '8',
      src: 'assets/images/gallery/IMG_1544.JPG',
      alt: 'טלי - מדריכת יוגה',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '9',
      src: 'assets/images/gallery/IMG_1576.JPG',
      alt: 'תרגול יוגה - תנוחת גשר',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '10',
      src: 'assets/images/gallery/IMG_1634.JPG',
      alt: 'תרגול יוגה - תנוחת פלנק צד',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '11',
      src: 'assets/images/gallery/DSC07342.jpeg',
      alt: 'תרגול יוגה - רגעים יפים',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '12',
      src: 'assets/images/gallery/ADCBFD14-9FC7-4019-A548-02F2068BE265.JPG',
      alt: 'תרגול יוגה - רגעים יפים',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '13',
      src: 'assets/images/gallery/2C1C068E-71C5-46D0-A064-BC64286B433A.JPG',
      alt: 'תרגול יוגה - רגעים יפים',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '14',
      src: 'assets/images/gallery/9C199668-9E14-430F-B252-0AA69C12E16B.JPG',
      alt: 'תרגול יוגה - רגעים יפים',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '15',
      src: 'assets/images/gallery/C262F449-91A0-4DF8-A4D9-706AC549B205.JPG',
      alt: 'תרגול יוגה - רגעים יפים',
      title: 'רגעים יפים מהסטודיו'
    }
  ]));

  private readonly recommendations = signal<IRecommendation[]>([
    {
      id: '1',
      message: 'רק להגיד שהשיעור שלך פשוט פצצה\nואני נהנית נורא!\nאת תותחית',
      timestamp: '9:23'
    },
    {
      id: '2',
      message: 'ואני ממליצה עליך לכולם',
      timestamp: '9:23'
    },
    {
      id: '3',
      message: 'שלום טלי,\nתודה על השיעור של היום 🙏\n❤️ אני באמת מרגישה שזכיתי בך\nבכל פעם מחדש את מזכירה לי כמה\nחשוב ונכון לתרגל יוגה.',
      timestamp: '17:05'
    },
    {
      id: '4',
      message: 'שלום טלי,\nתודה רבה על הדרך שבה את מובילה אותי ליוגה.\nתודה על הסבלנות, ההקשבה,\nוההשראה שאת נותנת בכל שיעור.\nבזכותך אני מוצאת את עצמי נלהבת\nלבוא לכל שיעור מחדש.\nתודה רבה 🙏',
      timestamp: '13:09'
    },
    {
      id: '5',
      message: 'וואי תודה על היום היה מתוק ממש כמו כל דבר שאת עושה ❤️\nבשנה הקשה הזאת הסטודיו שלך והתרגול ואת בעצמך עם הרגישות וההקשבה שלך הייתם ממש עוגן בשבילי\nהגעתי לפני שנה בערך והייתי מרוסקת! במצב קשה ממש...ולאט לאט אני משתקמת וזה ממש ממש בזכות המקום שלך\nהדבר היחיד שיש לי להגיד זה הסטודיו של טלי 💖',
      timestamp: '13:07'
    },
    {
      id: '6',
      message: 'טלייי תודה על השיעור ❤️\nאני בימים מאוד לחוצים אז רציתי להגיד\nלך שהשיעור עשה לי טוב במיוחד, היו לי\nממש רגעי פז של נשימה, הרפייה\nורגיעה.\nתודה עלייך, ממש מרגישים את הנתינה\nשלך והאכפתיות בשיעורים ❤️',
      timestamp: '22:06'
    },
    {
      id: '7',
      message: 'היי טלי.\nבוקר טוב.\nקודם כל אני רוצה להודות לך שוב מעומק הלב.\nפתחת לי עולם חדש, עולם היוגה, שתרם לי המון, גם פיזית ובמיוחד לנפש שלי.\nאני מאחלת לך שתמיד תמשיכי לגרום לאנשים לחזק את הגוף והנפש בצורה כל כך טובה.\nלצערי אני חייבת לבטל את המנוי מסיבות טובות, אכן, ואני מקווה לחזור להתאמן ולתרגל יוגה.\nהרבה הצלחה ובריאות.',
      timestamp: '8:50'
    },
    {
      id: '8',
      message: 'תודה רבה על השיעור בבוקר',
      timestamp: '12:20'
    },
    {
      id: '9',
      message: 'פשוט אני יוצאת מכל שיעור בתחושת ריפוי ענקית.. ממש ממש תודה לך',
      timestamp: '12:21'
    },
    {
      id: '10',
      message: 'ממש מקום מדהים ואת מקצועית מאוד. שמחה כל כך שנרשמתי',
      timestamp: '12:21'
    },
    {
      id: '11',
      message: 'שלום טלי,\nרציתי להודות לך מעומק הלב על השיעורים המדהימים וההדרכה המסורה שלך.\nתודה על תשומת הלב לפרטים הקטנים ועל הסבלנות הרבה שלך.\nאני מעריכה מאוד את ההשפעה החיובית שאת יוצרת.\nתודה רבה 🙏',
      timestamp: '13:37'
    },
    {
      id: '12',
      message: 'היי אהובה\nאני בחופשת מחלה ולא יוצאת מהבית, לא רוצה לראות חברים או משפחה או לדבר עם אף אחד\nהסטודיו פשוט מציל אותי\nזה הדבר היחיד שאני עושה בשבוע הזה\nבזכותך מצליחה לנשום קצת יותר\nאין לך מושג איזה שליחות יש בך ואת עושה אותה מדויק\nתודה על המקום הקסום הזה מתנה ליקום. ❤️🙏',
      timestamp: '16:11'
    },
    {
      id: '13',
      message: 'טלי היקרה,\nתודה על תרגול האגן ולב בערב יום כיפור.\nהתרגול השפיע לא רק על הלב אלא גם על הגוף.\nבמהלך התרגול כמעט בכיתי, הרגשתי הצפה רגשית בלי שום סיבה מוקדמת.\nהרגשתי שמשהו אחר קורה בגוף שלי.\nהמחזור שלי שהיה לא סדיר ואפילו נעלם כמה חודשים, חזר באופן מפתיע ביום כיפור, רק שבועיים אחרי המחזור הקודם.\nאני מייחסת את זה רק לתרגול.\nתודה על המקצועיות הייחודית שלך ועל הכוח המעניין שיש לך לשלוט בגוף, זה בהחלט עובד.\nתודה שזכיתי.',
      timestamp: '12:46'
    }
  ]);

  getYogaClasses() {
    return this.yogaClasses.asReadonly();
  }

  getContactInfo() {
    return this.contactInfo.asReadonly();
  }

  getGalleryImages() {
    return this.galleryImages.asReadonly();
  }

  getRecommendations() {
    return this.recommendations.asReadonly();
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

