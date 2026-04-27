export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string
          event_name: string
          id: string
          properties: Json
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_name: string
          id?: string
          properties?: Json
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_name?: string
          id?: string
          properties?: Json
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          body: string
          created_at: string
          id: string
          is_hidden: boolean
          likes_count: number
          parent_id: string | null
          signal_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          likes_count?: number
          parent_id?: string | null
          signal_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          likes_count?: number
          parent_id?: string | null
          signal_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_signal_id_fkey"
            columns: ["signal_id"]
            isOneToOne: false
            referencedRelation: "signals"
            referencedColumns: ["id"]
          },
        ]
      }
      hotd: {
        Row: {
          created_at: string
          created_by: string | null
          ends_at: string
          id: string
          locale: string
          signal_id: string
          starts_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          ends_at: string
          id?: string
          locale?: string
          signal_id: string
          starts_at: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          ends_at?: string
          id?: string
          locale?: string
          signal_id?: string
          starts_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hotd_signal_id_fkey"
            columns: ["signal_id"]
            isOneToOne: false
            referencedRelation: "signals"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          id: string
          target_id: string
          target_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          target_id: string
          target_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          target_id?: string
          target_type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          accuracy_score: number
          avatar_url: string | null
          badges: string[]
          bio: string | null
          created_at: string
          display_name: string
          home_region: Database["public"]["Enums"]["region_code"]
          id: string
          interests: Database["public"]["Enums"]["signal_category"][]
          locale: string
          reputation_score: number
          streak_days: number
          updated_at: string
          user_id: string
          username: string
          votes_count: number
        }
        Insert: {
          accuracy_score?: number
          avatar_url?: string | null
          badges?: string[]
          bio?: string | null
          created_at?: string
          display_name: string
          home_region?: Database["public"]["Enums"]["region_code"]
          id?: string
          interests?: Database["public"]["Enums"]["signal_category"][]
          locale?: string
          reputation_score?: number
          streak_days?: number
          updated_at?: string
          user_id: string
          username: string
          votes_count?: number
        }
        Update: {
          accuracy_score?: number
          avatar_url?: string | null
          badges?: string[]
          bio?: string | null
          created_at?: string
          display_name?: string
          home_region?: Database["public"]["Enums"]["region_code"]
          id?: string
          interests?: Database["public"]["Enums"]["signal_category"][]
          locale?: string
          reputation_score?: number
          streak_days?: number
          updated_at?: string
          user_id?: string
          username?: string
          votes_count?: number
        }
        Relationships: []
      }
      reports: {
        Row: {
          created_at: string
          details: string | null
          id: string
          reason: string
          reporter_id: string
          reviewed_at: string | null
          status: Database["public"]["Enums"]["report_status"]
          target_id: string
          target_type: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          id?: string
          reason: string
          reporter_id: string
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          target_id: string
          target_type: string
        }
        Update: {
          created_at?: string
          details?: string | null
          id?: string
          reason?: string
          reporter_id?: string
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          target_id?: string
          target_type?: string
        }
        Relationships: []
      }
      signals: {
        Row: {
          category: Database["public"]["Enums"]["signal_category"]
          created_at: string
          created_by: string | null
          featured_at: string | null
          horizon_label: string
          id: string
          min_region_votes: number
          neutral_count: number
          no_count: number
          region: Database["public"]["Enums"]["region_code"]
          resolved_choice: Database["public"]["Enums"]["vote_choice"] | null
          resolves_at: string | null
          safe_note: string
          slug: string
          status: Database["public"]["Enums"]["signal_status"]
          summary_en: string
          summary_fr: string
          tension_score: number
          title_en: string
          title_fr: string
          updated_at: string
          yes_count: number
        }
        Insert: {
          category: Database["public"]["Enums"]["signal_category"]
          created_at?: string
          created_by?: string | null
          featured_at?: string | null
          horizon_label: string
          id?: string
          min_region_votes?: number
          neutral_count?: number
          no_count?: number
          region?: Database["public"]["Enums"]["region_code"]
          resolved_choice?: Database["public"]["Enums"]["vote_choice"] | null
          resolves_at?: string | null
          safe_note?: string
          slug: string
          status?: Database["public"]["Enums"]["signal_status"]
          summary_en: string
          summary_fr: string
          tension_score?: number
          title_en: string
          title_fr: string
          updated_at?: string
          yes_count?: number
        }
        Update: {
          category?: Database["public"]["Enums"]["signal_category"]
          created_at?: string
          created_by?: string | null
          featured_at?: string | null
          horizon_label?: string
          id?: string
          min_region_votes?: number
          neutral_count?: number
          no_count?: number
          region?: Database["public"]["Enums"]["region_code"]
          resolved_choice?: Database["public"]["Enums"]["vote_choice"] | null
          resolves_at?: string | null
          safe_note?: string
          slug?: string
          status?: Database["public"]["Enums"]["signal_status"]
          summary_en?: string
          summary_fr?: string
          tension_score?: number
          title_en?: string
          title_fr?: string
          updated_at?: string
          yes_count?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vote_notes: {
        Row: {
          body: string
          created_at: string
          id: string
          is_hidden: boolean
          likes_count: number
          nuance_tags: string[]
          signal_id: string
          updated_at: string
          user_id: string
          vote_id: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          likes_count?: number
          nuance_tags?: string[]
          signal_id: string
          updated_at?: string
          user_id: string
          vote_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          likes_count?: number
          nuance_tags?: string[]
          signal_id?: string
          updated_at?: string
          user_id?: string
          vote_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vote_notes_signal_id_fkey"
            columns: ["signal_id"]
            isOneToOne: false
            referencedRelation: "signals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vote_notes_vote_id_fkey"
            columns: ["vote_id"]
            isOneToOne: false
            referencedRelation: "votes"
            referencedColumns: ["id"]
          },
        ]
      }
      votes: {
        Row: {
          choice: Database["public"]["Enums"]["vote_choice"]
          confidence: number
          created_at: string
          id: string
          signal_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          choice: Database["public"]["Enums"]["vote_choice"]
          confidence?: number
          created_at?: string
          id?: string
          signal_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          choice?: Database["public"]["Enums"]["vote_choice"]
          confidence?: number
          created_at?: string
          id?: string
          signal_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "votes_signal_id_fkey"
            columns: ["signal_id"]
            isOneToOne: false
            referencedRelation: "signals"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      region_code: "world" | "africa" | "europe" | "france" | "usa"
      report_status: "open" | "reviewed" | "dismissed" | "actioned"
      signal_category:
        | "news"
        | "tech"
        | "business"
        | "crypto"
        | "sport"
        | "culture"
        | "society"
      signal_status: "draft" | "open" | "resolved" | "archived"
      vote_choice: "yes" | "no" | "neutral"
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
    Enums: {
      app_role: ["admin", "moderator", "user"],
      region_code: ["world", "africa", "europe", "france", "usa"],
      report_status: ["open", "reviewed", "dismissed", "actioned"],
      signal_category: [
        "news",
        "tech",
        "business",
        "crypto",
        "sport",
        "culture",
        "society",
      ],
      signal_status: ["draft", "open", "resolved", "archived"],
      vote_choice: ["yes", "no", "neutral"],
    },
  },
} as const
