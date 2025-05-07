// Интерфейс, который ожидает клиент
interface NewPaymentSystem {
    pay(amount: number): string;
  }
  
  // Старая система с несовместимым интерфейсом
  class OldPaymentSystem {
    makePayment(total: number): void {
      console.log(`Paying ${total} dollars via old system`);
    }
  }
  
  // Адаптер
  class PaymentAdapter implements NewPaymentSystem {
    constructor(private oldSystem: OldPaymentSystem) {}
  
    pay(amount: number): string {
      this.oldSystem.makePayment(amount);
      return `Payment of ${amount} processed`;
    }
  }
  
  // Пример использования
  const oldSystem = new OldPaymentSystem();
  const adapter = new PaymentAdapter(oldSystem);
  console.log(adapter.pay(100));