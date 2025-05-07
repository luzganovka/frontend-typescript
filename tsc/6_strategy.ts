// Интерфейс стратегии
interface SortingStrategy<T> {
    sort(data: T[]): T[];
  }
  
  // Конкретные стратегии
  class QuickSortStrategy implements SortingStrategy<number> {
    sort(data: number[]): number[] {
      console.log("Sorting using quick sort");
      return [...data].sort((a, b) => a - b);
    }
  }
  
  class BubbleSortStrategy implements SortingStrategy<number> {
    sort(data: number[]): number[] {
      console.log("Sorting using bubble sort");
      return [...data].sort((a, b) => a - b);
    }
  }
  
  // Контекст
  class Sorter {
    constructor(private strategy: SortingStrategy<number>) {}
  
    setStrategy(strategy: SortingStrategy<number>): void {
      this.strategy = strategy;
    }
  
    sort(data: number[]): number[] {
      return this.strategy.sort(data);
    }
  }
  
  // Пример использования
  const data = [3, 1, 4, 1, 5, 9, 2];
  const sorter = new Sorter(new QuickSortStrategy());
  console.log(sorter.sort(data)); // Quick sort
  
  sorter.setStrategy(new BubbleSortStrategy());
  console.log(sorter.sort(data)); // Bubble sort