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
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      alt: 'יוגה בסטודיו',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      alt: 'תרגול יוגה',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      alt: 'יוגה קבוצתית',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      alt: 'תנועה ויוגה',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      alt: 'יוגה בסטודיו',
      title: 'רגעים יפים מהסטודיו'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      alt: 'תרגול יוגה',
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

