export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      call_scheduler_submissions: {
        Row: {
          business_type: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          ip_address: unknown | null
          message: string | null
          name: string
          phone: string | null
          preferred_date: string
          preferred_time: string
          processed: boolean | null
          user_agent: string | null
        }
        Insert: {
          business_type?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          ip_address?: unknown | null
          message?: string | null
          name: string
          phone?: string | null
          preferred_date: string
          preferred_time: string
          processed?: boolean | null
          user_agent?: string | null
        }
        Update: {
          business_type?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          ip_address?: unknown | null
          message?: string | null
          name?: string
          phone?: string | null
          preferred_date?: string
          preferred_time?: string
          processed?: boolean | null
          user_agent?: string | null
        }
        Relationships: []
      }
      clan_levels: {
        Row: {
          created_at: string
          energy_boost: number | null
          id: string
          level: number
          name: string
          required_coins: number
        }
        Insert: {
          created_at?: string
          energy_boost?: number | null
          id?: string
          level: number
          name: string
          required_coins: number
        }
        Update: {
          created_at?: string
          energy_boost?: number | null
          id?: string
          level?: number
          name?: string
          required_coins?: number
        }
        Relationships: []
      }
      clan_members: {
        Row: {
          clan_id: string | null
          coins_contributed: number | null
          id: string
          joined_at: string
          role: string | null
          telegram_id: number
        }
        Insert: {
          clan_id?: string | null
          coins_contributed?: number | null
          id?: string
          joined_at?: string
          role?: string | null
          telegram_id: number
        }
        Update: {
          clan_id?: string | null
          coins_contributed?: number | null
          id?: string
          joined_at?: string
          role?: string | null
          telegram_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_mission_progress: {
        Row: {
          clan_id: string | null
          completed_at: string | null
          created_at: string
          id: string
          mission_id: string | null
          progress: number | null
        }
        Insert: {
          clan_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          mission_id?: string | null
          progress?: number | null
        }
        Update: {
          clan_id?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          mission_id?: string | null
          progress?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clan_mission_progress_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_mission_progress_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_mission_progress_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "clan_missions"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_missions: {
        Row: {
          created_at: string
          description: string | null
          difficulty: string | null
          id: string
          is_active: boolean | null
          required_members: number | null
          reward_coins: number | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: string
          is_active?: boolean | null
          required_members?: number | null
          reward_coins?: number | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: string
          is_active?: boolean | null
          required_members?: number | null
          reward_coins?: number | null
          title?: string
        }
        Relationships: []
      }
      clans: {
        Row: {
          created_at: string
          creator_id: string | null
          description: string | null
          id: string
          image: string | null
          level: number | null
          member_count: number | null
          missions_completed: number | null
          name: string
          telegram_link: string | null
          total_coins: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id?: string | null
          description?: string | null
          id?: string
          image?: string | null
          level?: number | null
          member_count?: number | null
          missions_completed?: number | null
          name: string
          telegram_link?: string | null
          total_coins?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          creator_id?: string | null
          description?: string | null
          id?: string
          image?: string | null
          level?: number | null
          member_count?: number | null
          missions_completed?: number | null
          name?: string
          telegram_link?: string | null
          total_coins?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          interest: string | null
          ip_address: unknown | null
          message: string
          name: string
          processed: boolean | null
          user_agent: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          interest?: string | null
          ip_address?: unknown | null
          message: string
          name: string
          processed?: boolean | null
          user_agent?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          interest?: string | null
          ip_address?: unknown | null
          message?: string
          name?: string
          processed?: boolean | null
          user_agent?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          earnings: number | null
          first_name: string | null
          id: string
          last_name: string | null
          photo_url: string | null
          referral_name: string | null
          telegram_id: number
          updated_at: string
          username: string | null
        }
        Insert: {
          created_at?: string
          earnings?: number | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          photo_url?: string | null
          referral_name?: string | null
          telegram_id: number
          updated_at?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          earnings?: number | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          photo_url?: string | null
          referral_name?: string | null
          telegram_id?: number
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      rate_limits: {
        Row: {
          action: string
          count: number | null
          created_at: string | null
          id: string
          identifier: string
          reset_time: string | null
        }
        Insert: {
          action: string
          count?: number | null
          created_at?: string | null
          id?: string
          identifier: string
          reset_time?: string | null
        }
        Update: {
          action?: string
          count?: number | null
          created_at?: string | null
          id?: string
          identifier?: string
          reset_time?: string | null
        }
        Relationships: []
      }
      security_audit_log: {
        Row: {
          action: string
          created_at: string
          details: Json | null
          id: string
          ip_address: unknown | null
          resource: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          reward_coins: number | null
          task_type: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          reward_coins?: number | null
          task_type?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          reward_coins?: number | null
          task_type?: string | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      clan_leaderboard: {
        Row: {
          created_at: string | null
          description: string | null
          id: string | null
          image: string | null
          level: number | null
          member_count: number | null
          missions_completed: number | null
          name: string | null
          rank: number | null
          telegram_link: string | null
          total_coins: number | null
        }
        Relationships: []
      }
      user_leaderboard: {
        Row: {
          earnings: number | null
          first_name: string | null
          rank: number | null
          referral_name: string | null
          telegram_id: number | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      check_rate_limit: {
        Args: {
          user_identifier: string
          action_type: string
          max_attempts?: number
          window_minutes?: number
        }
        Returns: boolean
      }
      get_current_telegram_id: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      log_security_event: {
        Args: {
          action_name: string
          resource_name?: string
          event_details?: Json
          client_ip?: unknown
          client_user_agent?: string
        }
        Returns: undefined
      }
      submit_contact_form: {
        Args: {
          form_name: string
          form_email: string
          form_message: string
          user_ip?: unknown
        }
        Returns: Json
      }
      user_owns_profile: {
        Args: { profile_telegram_id: number }
        Returns: boolean
      }
      validate_input_safety: {
        Args: { input_text: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
