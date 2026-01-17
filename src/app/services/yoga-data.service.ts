import { Injectable, signal } from '@angular/core';
import { IYogaClass } from '../models/yoga-class.interface';
import { IContactInfo } from '../models/contact.interface';
import { IGalleryImage } from '../models/gallery-image.interface';

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

  private readonly galleryImages = signal<IGalleryImage[]>([
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
}

