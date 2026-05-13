export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  is_available: boolean;
  details?: string[] | null;
  created_at?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url?: string | null;
}

export interface Order {
  id: string;
  customer_name: string;
  table_number: string;
  total_amount: number;
  status: 'pending' | 'preparing' | 'ready_for_pickup' | 'completed' | 'cancelled';
  order_items: OrderItem[];
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  created_at?: string;
}

export interface CarouselImage {
  id: string;
  url: string;
  label?: string;
  created_at?: string;
}

export interface CarouselSettings {
  id: number;
  enabled: boolean;
  speed: number;
}
