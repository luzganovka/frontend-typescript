// Интерфейсы
interface Observer {
    update(data: string): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(data: string): void;
}

// Конкретный субъект
class NewsPublisher implements Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: string): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    publishNews(news: string): void {
        console.log(`Publishing news: ${news}`);
        this.notify(news);
    }
}

// Конкретные наблюдатели
class EmailSubscriber implements Observer {
    update(data: string): void {
        console.log(`Sending email with news: ${data}`);
    }
}

class SMSSubscriber implements Observer {
    update(data: string): void {
        console.log(`Sending SMS with news: ${data}`);
    }
}

// Пример использования
const publisher = new NewsPublisher();
const emailSubscriber = new EmailSubscriber();
const smsSubscriber = new SMSSubscriber();

publisher.attach(emailSubscriber);
publisher.attach(smsSubscriber);

publisher.publishNews("Hello!");

publisher.detach(smsSubscriber);
publisher.publishNews("World!");
