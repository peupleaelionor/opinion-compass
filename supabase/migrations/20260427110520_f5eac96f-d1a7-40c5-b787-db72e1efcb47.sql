CREATE SCHEMA IF NOT EXISTS private;

CREATE OR REPLACE FUNCTION private.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC;
DROP POLICY IF EXISTS "Admins manage profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can read own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Open signals are public" ON public.signals;
DROP POLICY IF EXISTS "Admins manage signals" ON public.signals;
DROP POLICY IF EXISTS "Users read own votes" ON public.votes;
DROP POLICY IF EXISTS "Admins manage votes" ON public.votes;
DROP POLICY IF EXISTS "Visible vote notes are public" ON public.vote_notes;
DROP POLICY IF EXISTS "Moderators manage vote notes" ON public.vote_notes;
DROP POLICY IF EXISTS "Visible comments are public" ON public.comments;
DROP POLICY IF EXISTS "Moderators manage comments" ON public.comments;
DROP POLICY IF EXISTS "Users read own reports" ON public.reports;
DROP POLICY IF EXISTS "Moderators manage reports" ON public.reports;
DROP POLICY IF EXISTS "Admins manage HOTD" ON public.hotd;
DROP POLICY IF EXISTS "Admins read analytics" ON public.analytics_events;

CREATE POLICY "Admins manage profiles" ON public.profiles FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id OR private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Open signals are public" ON public.signals FOR SELECT USING (status IN ('open', 'resolved', 'archived') OR private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Admins manage signals" ON public.signals FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator')) WITH CHECK (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Users read own votes" ON public.votes FOR SELECT TO authenticated USING (auth.uid() = user_id OR private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Admins manage votes" ON public.votes FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Visible vote notes are public" ON public.vote_notes FOR SELECT USING (is_hidden = false OR auth.uid() = user_id OR private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Moderators manage vote notes" ON public.vote_notes FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator')) WITH CHECK (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Visible comments are public" ON public.comments FOR SELECT USING (is_hidden = false OR auth.uid() = user_id OR private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Moderators manage comments" ON public.comments FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator')) WITH CHECK (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Users read own reports" ON public.reports FOR SELECT TO authenticated USING (auth.uid() = reporter_id OR private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Moderators manage reports" ON public.reports FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator')) WITH CHECK (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Admins manage HOTD" ON public.hotd FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator')) WITH CHECK (private.has_role(auth.uid(), 'admin') OR private.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Admins read analytics" ON public.analytics_events FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'));

DROP FUNCTION public.has_role(UUID, public.app_role);

DROP POLICY IF EXISTS "Avatar images are public" ON storage.objects;
CREATE POLICY "Avatar images are public" ON storage.objects FOR SELECT USING (bucket_id = 'avatars' AND array_length(storage.foldername(name), 1) = 1 AND storage.extension(name) IN ('jpg', 'jpeg', 'png', 'webp'));
