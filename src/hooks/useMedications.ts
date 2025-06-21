import { useQuery } from '@tanstack/react-query'
// Adjust the path below to match your project structure
import supabase from '../helper/supabaseClient'

export const useMedications = () => {
  return useQuery({
    queryKey: ['medications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('meds-buddy-check') // ✅ your table name
        .select('*');             // ❌ no filter by user_id

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
};