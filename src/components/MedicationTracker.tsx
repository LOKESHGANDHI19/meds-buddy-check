
// import { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Check, Image, Camera, Clock } from "lucide-react";
// import { format } from "date-fns";

// interface MedicationTrackerProps {
//   date: string;
//   isTaken: boolean;
//   onMarkTaken: (date: string, imageFile?: File) => void;
//   isToday: boolean;
// }

// const MedicationTracker = ({ date, isTaken, onMarkTaken, isToday }: MedicationTrackerProps) => {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const dailyMedication = {
//     name: "Daily Medication Set",
//     time: "8:00 AM",
//     description: "Complete set of daily tablets"
//   };

//   const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleMarkTaken = () => {
//     onMarkTaken(date, selectedImage || undefined);
//     setSelectedImage(null);
//     setImagePreview(null);
//   };

//   if (isTaken) {
//     return (
//       <div className="space-y-4">
//         <div className="flex items-center justify-center p-8 bg-green-50 rounded-xl border-2 border-green-200">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Check className="w-8 h-8 text-white" />
//             </div>
//             <h3 className="text-xl font-semibold text-green-800 mb-2">
//               Medication Completed!
//             </h3>
//             <p className="text-green-600">
//               Great job! You've taken your medication for {format(new Date(date), 'MMMM d, yyyy')}.
//             </p>
//           </div>
//         </div>
        
//         <Card className="border-green-200 bg-green-50/50">
//           <CardContent className="flex items-center justify-between p-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                 <Check className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-medium text-green-800">{dailyMedication.name}</h4>
//                 <p className="text-sm text-green-600">{dailyMedication.description}</p>
//               </div>
//             </div>
//             <Badge variant="secondary" className="bg-green-100 text-green-800">
//               <Clock className="w-3 h-3 mr-1" />
//               {dailyMedication.time}
//             </Badge>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <Card className="hover:shadow-md transition-shadow">
//         <CardContent className="flex items-center justify-between p-4">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//               <span className="text-blue-600 font-medium">1</span>
//             </div>
//             <div>
//               <h4 className="font-medium">{dailyMedication.name}</h4>
//               <p className="text-sm text-muted-foreground">{dailyMedication.description}</p>
//             </div>
//           </div>
//           <Badge variant="outline">
//             <Clock className="w-3 h-3 mr-1" />
//             {dailyMedication.time}
//           </Badge>
//         </CardContent>
//       </Card>

//       {/* Image Upload Section */}
//       <Card className="border-dashed border-2 border-border/50">
//         <CardContent className="p-6">
//           <div className="text-center">
//             <Image className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//             <h3 className="font-medium mb-2">Add Proof Photo (Optional)</h3>
//             <p className="text-sm text-muted-foreground mb-4">
//               Take a photo of your medication or pill organizer as confirmation
//             </p>
            
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageSelect}
//               ref={fileInputRef}
//               className="hidden"
//             />
            
//             <Button
//               variant="outline"
//               onClick={() => fileInputRef.current?.click()}
//               className="mb-4"
//             >
//               <Camera className="w-4 h-4 mr-2" />
//               {selectedImage ? "Change Photo" : "Take Photo"}
//             </Button>
            
//             {imagePreview && (
//               <div className="mt-4">
//                 <img
//                   src={imagePreview}
//                   alt="Medication proof"
//                   className="max-w-full h-32 object-cover rounded-lg mx-auto border-2 border-border"
//                 />
//                 <p className="text-sm text-muted-foreground mt-2">
//                   Photo selected: {selectedImage?.name}
//                 </p>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Mark as Taken Button */}
//       <Button
//         onClick={handleMarkTaken}
//         className="w-full py-4 text-lg bg-green-600 hover:bg-green-700 text-white"
//         disabled={!isToday}
//       >
//         <Check className="w-5 h-5 mr-2" />
//         {isToday ? "Mark as Taken" : "Cannot mark future dates"}
//       </Button>

//       {!isToday && (
//         <p className="text-center text-sm text-muted-foreground">
//           You can only mark today's medication as taken
//         </p>
//       )}
//     </div>
//   );
// };

// export default MedicationTracker;



// ---------------------------------------------


import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Image, Camera, Clock } from "lucide-react";
import { format } from "date-fns";
import { useMedications } from "@/hooks/useMedications";
import supabase from "../helper/supabaseClient";

interface MedicationTrackerProps {
  date: string;
  isTaken: boolean;
  onMarkTaken: (date: string, imageFile?: File) => void;
  isToday: boolean;
}

const MedicationTracker = ({
  date,
  isTaken,
  onMarkTaken,
  isToday,
}: MedicationTrackerProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showMedList, setShowMedList] = useState(false);
  // const [userId, setUserId] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     if (user) setUserId(user.id);
  //   };
  //   getUser();
  // }, []);

  const { data: medications, isLoading } = useMedications();

  const toggleList = () => setShowMedList((prev) => !prev);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleMarkTaken = () => {
    onMarkTaken(date, selectedImage || undefined);
    setSelectedImage(null);
    setImagePreview(null);
  };

  if (isTaken) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center p-8 bg-green-50 rounded-xl border-2 border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Medication Completed!
            </h3>
            <p className="text-green-600">
              Great job! You've taken your medication for{" "}
              {format(new Date(date), "MMMM d, yyyy")}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Medication Card */}
      <Card onClick={toggleList} className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">1</span>
            </div>
            <div>
              <h4 className="font-medium">Daily Medication Set</h4>
              <p className="text-sm text-muted-foreground">Click to view medication list</p>
            </div>
          </div>
          <Badge variant="outline">
            <Clock className="w-3 h-3 mr-1" />
            8:00 AM
          </Badge>
        </CardContent>
      </Card>

      {/* Medication List */}
      {showMedList && (
        <div className="mt-4 space-y-3">
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading medications...</p>
          ) : medications?.length === 0 ? (
            <p className="text-sm text-muted-foreground">No medications found.</p>
          ) : (
            medications.map((med) => (
              <Card key={med.id} className="border border-gray-200 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{med.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {med.dosage} – {med.frequency}
                      </p>
                    </div>
                    <Badge variant="secondary">{med.frequency}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Image Upload Section */}
      <Card className="border-dashed border-2 border-border/50">
        <CardContent className="p-6 text-center">
          <Image className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-medium mb-2">Add Proof Photo (Optional)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Take a photo of your medication or pill organizer
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            ref={fileInputRef}
            className="hidden"
          />
          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mb-4">
            <Camera className="w-4 h-4 mr-2" />
            {selectedImage ? "Change Photo" : "Take Photo"}
          </Button>
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Medication proof"
                className="max-w-full h-32 object-cover rounded-lg mx-auto border-2 border-border"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Photo selected: {selectedImage?.name}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Mark as Taken */}
      {/* <Button
        onClick={handleMarkTaken}
        className="w-full py-4 text-lg bg-green-600 hover:bg-green-700 text-white"
        disabled={!isToday}
      >
        <Check className="w-5 h-5 mr-2" />
        {isToday ? "Mark as Taken" : "Cannot mark future dates"}
      </Button>

      {!isToday && (
        <p className="text-center text-sm text-muted-foreground">
          You can only mark today's medication as taken
        </p>
      )} */}

      <Button
  onClick={handleMarkTaken}
  className={`w-full py-4 text-lg text-white ${
    isToday && selectedImage
      ? "bg-green-600 hover:bg-green-700"
      : "bg-gray-400 cursor-not-allowed"
  }`}
  disabled={!isToday || !selectedImage}
>
  <Check className="w-5 h-5 mr-2" />
  {isToday
    ? selectedImage
      ? "Mark as Taken"
      : "Upload a Photo First"
    : "Cannot mark future dates"}
</Button>

{!isToday && (
  <p className="text-center text-sm text-muted-foreground">
    You can only mark today's medication as taken
  </p>
)}

{isToday && !selectedImage && (
  <p className="text-center text-sm text-red-600 mt-2">
    Please upload a proof image to mark as taken.
  </p>
)}

    </div>
  );
};

export default MedicationTracker;
